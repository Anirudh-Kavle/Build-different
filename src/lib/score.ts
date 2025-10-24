export const getScoreZone = (score: number) => {
    if (score === 0) return null;
    
    if (score <= 7) {
      return {
        icon: "🧊",
        title: "Cold Idea (0–7)",
        description:
          "This idea is giving strong Capstone Project Week 2 energy. It’s functionally fine, emotionally absent, and spiritually outsourced to ChatGPT. If this were a startup, your pitch deck would start with ‘So basically it’s like Notion, but…’ and never recover.",
        color: "bg-blue-100",
      };
    } else if (score <= 12) {
      return {
        icon: "⚙️",
        title: "Warm Idea (8–12)",
        description:
          "You’re hovering in that dangerous middle ground: competent, but not unhinged enough to be interesting. The idea is promising, but right now it’s the tech equivalent of an unseasoned chicken breast — fine, but the only upvote it’s getting is from your alt account.",
        color: "bg-yellow-100",
      };
    } else if (score <= 16) {
      return {
        icon: "🔥",
        title: "Hot Idea (13–16)",
        description:
          "This idea is actually worth your time. It’s distinct, non-trivial, and forces you to make real architectural choices instead of just assembling APIs like Lego. You’ll hit a few gnarly spots, learn enough to feel slightly dangerous, and end up with something that actually looks like you thought about it, not just Ctrl+C, Ctrl+V-ed from a tutorial.",
        color: "bg-orange-100",
      };
    } else {
      return {
        icon: "🧠",
        title: "Mad Idea (17–20)",
        description:
          'This isn’t a project. It’s a manifesto written in code. You’ve gone full mad scientist, dangerously creative, fueled by sweat, caffeine, and mild existential dread, and learning you actually care about.',
        color: "bg-red-100",
      };
    }
  };

  
export const getScoreColor = (score: number) => {
  if (score <= 7) return "#3B82F6";
  if (score <= 12) return "#EAB308";
  if (score <= 16) return "#F97316";
  return "#EF4444";
};

export const getScoreLabel = (score: number) => {
  if (score === 0) return "";
  if (score <= 7) return "Cold Idea 🧊";
  if (score <= 12) return "Warm Idea ⚙️";
  if (score <= 16) return "Hot Idea 🔥";
  return "Mad Idea 🧠";
};