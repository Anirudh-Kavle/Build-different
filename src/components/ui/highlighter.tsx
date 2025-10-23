// ./src/components/ui/highlighter.tsx
"use client";

import { useEffect, useRef } from "react";
import type React from "react";
// Ensure this import is correct based on your fix
import { useInView } from "framer-motion";
import { annotate } from "rough-notation";
import { type RoughAnnotation } from "rough-notation/lib/model";

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket";

interface HighlighterProps {
  children: React.ReactNode;
  action?: AnnotationAction;
  color?: string;
  strokeWidth?: number;
  animationDuration?: number;
  iterations?: number;
  padding?: number;
  multiline?: boolean;
  isView?: boolean; // Controls if animation waits for viewport entry
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  // Ref to store the annotation instance
  const annotationRef = useRef<RoughAnnotation | null>(null);
  // Ref to track if the annotation process (create + show) has already occurred
  const animationStartedRef = useRef(false);

  // Use useInView to determine visibility
  const isInView = useInView(elementRef, {
    once: true, // Only trigger callback once when it enters the view
    margin: "-10%", // Trigger slightly before it's fully in view
  });

  useEffect(() => {
    const element = elementRef.current;

    // Determine if we should proceed with annotation *now*
    // If isView is true, wait for isInView. If false, proceed immediately.
    const readyToAnimate = isView ? isInView : true;

    // Only proceed if element exists, we haven't started the animation yet, and conditions are met
    if (!element || animationStartedRef.current || !readyToAnimate) {
      // console.log("Effect exited early:", { element: !!element, started: animationStartedRef.current, ready: readyToAnimate });
      return;
    }

    // Double-check inside the effect to prevent race conditions during setup
    if (animationStartedRef.current) {
      // console.log("Race condition check prevented re-animation");
      return;
    }

    // Configuration for rough-notation
    const config = {
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    };

    // Create the annotation object
    const newAnnotation = annotate(element, config);
    annotationRef.current = newAnnotation;

    // Show the annotation (this triggers the initial animation)
    newAnnotation.show();

    // CRITICAL: Mark that the animation process has started for this component instance
    animationStartedRef.current = true;
    // console.log("Animation shown for element:", element.textContent);

    // Setup ResizeObserver to adjust annotation if element size changes
    const resizeObserver = new ResizeObserver(() => {
      // Adjust the annotation if the element or surrounding layout changes size
      if (annotationRef.current) {
        // Note: This hide/show might redraw the annotation path but ideally
        // doesn't restart the *initial* animation sequence defined by iterations/duration.
        annotationRef.current.hide();
        annotationRef.current.show();
      }
    });

    // Observe the target element and the body for layout shifts
    resizeObserver.observe(element);
    resizeObserver.observe(document.body);

    // Cleanup function to run when the component unmounts
    return () => {
      // console.log("Cleaning up annotation for:", element?.textContent);
      // Remove the rough-notation effect and clear the reference
      if (annotationRef.current) {
        annotationRef.current.remove();
        annotationRef.current = null;
      }
      // Disconnect the ResizeObserver
      resizeObserver.disconnect();
    };

    // IMPORTANT: No dependencies array. This effect runs on mount and cleanup only.
    // The logic inside controls *when* the animation happens based on refs and conditions.
  }, []); // Empty dependency array ensures this runs only once on mount and once on unmount

  // Render the span that will be annotated
  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  );
}