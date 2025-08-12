import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addAllMoods } from "../helper/general"; 

export default function AdvicePage() {
  const moodAdvice = [
    "Take a short mindful walk",
    "Limit screen time before bed",
    "Practice a 5-minute meditation",
    "Practice deep breathing",
    "Write down 3 things you’re grateful for",
    "Light a calming scent (lavender, eucalyptus)",
    "Stretch for 2-3 minutes",
  ];

  const dailyKindness = [
    "You are enough, just as you are.",
    "Your presence makes the world a better place.",
    "Believe in yourself—today and always.",
    "Small acts of kindness can change someone’s day.",
    "Your smile is contagious—keep sharing it!",
    "You’ve overcome so much—and you’re still standing.",
    "Take a deep breath: you’ve got this.",
  ];

  const [tip, setTip] = useState("");
  const [noteText, setNoteText] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todayTips, setTodayTips] = useState([]);

  useEffect(() => {
    const idx = Math.floor(Math.random() * dailyKindness.length);
    setTip(dailyKindness[idx]);
  }, []);

  useEffect(() => {
    const shuffled = [...moodAdvice].sort(() => 0.5 - Math.random());
    setTodayTips(shuffled.slice(0, 3));
  }, []);

  const handleSaveNote = async () => {
    try {
      await addAllMoods({ data: noteText });
      setSavedNotes((prev) => [...prev, noteText]);
      setNoteText("");
    } catch (error) {
      console.error("Failed to save note:", error);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  const location = useLocation();
  const mood = location.state?.mood || "Unknown";

  return (
    <div className="container">
      <h1 className="main-title font-extrabold">Mental Health Companion</h1>
      <div className="card2">

        
        <div className="tab mb-4">
          <h1 className="title font-extrabold" style={{ fontSize: "1.5rem", marginTop: "0.1rem" }}>
            Your Mood:
          </h1>
          <div style={{ textAlign: "center", marginTop: "0.1rem" }}>
            <p style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#6A5ACD", margin: "0" }}>
              {mood}
            </p>
            <p style={{ fontSize: "1.2rem", color: "#555", marginTop: "0.5rem" }}>
              {{
                Happy: "You're feeling joyful and optimistic!",
                Peaceful: "Calm and serene, a perfect balance.",
                Melancholic: "A bit thoughtful and reflective today.",
                Anxious: "Feeling nervous, try to relax a bit.",
                Angry: "Frustration is high, take a deep breath.",
                Incomplete: "Please complete all answers to see your mood.",
              }[mood.split(" ")[0]] || "Unknown mood"}
            </p>
          </div>
        </div>

        {/* Suggested Tasks */}
        <div className="tab2 mb-4">
          <h4 style={{ color: "rgb(161, 98, 7)" }}>Today's Suggested Tasks:</h4>
          <ul className="suggestion">
            {todayTips.map((tipItem, idx) => (
              <li key={idx}>{tipItem}</li>
            ))}
          </ul>
        </div>

        {/* Note Taking */}
        <div className="tab3 mb-4" style={{ backgroundColor: "#d6e0ff", padding: "20px", borderRadius: "8px" }}>
          <h4 style={{ color: "rgb(12, 100, 242)", marginBottom: "10px" }}>How I feel today:</h4>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="Write down your feelings"
            style={{
              minHeight: "100px",
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
            <button className="animated-button" onClick={handleSaveNote}>Save Note</button>
            <button className="animated-button" onClick={() => setIsModalOpen(true)}>Your History Notes</button>
          </div>
        </div>
<div className="tab5 mb-4" style={{ textAlign: "center" }}>
  <h4 style={{ color: "rgb(8, 113, 60)", textAlign: "center" }}>Your Daily Dose of Kindness:</h4>
  <h4 style={{ textAlign: "center", color: "grey" }}>{tip}</h4>
  <button
    className="animated-button"
    onClick={() => {
      const newIdx = Math.floor(Math.random() * dailyKindness.length);
      setTip(dailyKindness[newIdx]);
    }}
    style={{ margin: "0 auto", display: "inline-block" }}
  >
    Have some more
  </button>
</div>


        {/* Resources */}
        <div className="tab6 mb-4">
          <h4 style={{ color: "rgb(67, 163, 246)" }}>Helpful Resources:</h4>
          <ul>
            <li><a href="https://thehappinesstrap.com" target="_blank" rel="noopener noreferrer">The Happiness Trap by Dr. Russ Harris</a></li>
            <li><a href="https://www.tarabrach.com/book-radical-acceptance/" target="_blank" rel="noopener noreferrer">Radical Acceptance by Tara Brach</a></li>
            <li><a href="https://lorigottlieb.com/maybe-you-should-talk-to-someone/" target="_blank" rel="noopener noreferrer">Maybe You Should Talk to Someone by Lori Gottlieb</a></li>
          </ul>
        </div>

        {/* Emergency Contact */}
        <div className="tab7 mb-4">
          <h4 style={{ color: "rgb(247, 55, 12)", textAlign: "center" }}>Feeling Overwhelmed?</h4>
          <p style={{ textAlign: "center" }}>Immediate support is available.</p>
          <div style={{
            backgroundColor: "rgb(247, 55, 12)",
            color: "white",
            textAlign: "center",
            padding: "10px",
            borderRadius: "8px",
            marginTop: "10px",
          }}>
            Call 8010 3666 — Tunisian Suicide Prevention Association
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={handleOverlayClick} style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}>
            <div className="modal-content" style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "500px",
              position: "relative",
            }}>
              <button onClick={() => setIsModalOpen(false)} style={{
                position: "absolute",
                top: "10px",
                right: "15px",
                fontSize: "20px",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}>
                ×
              </button>
              <h3 style={{ marginBottom: "10px" }}>Your Mood History</h3>
              {savedNotes.length === 0 ? (
                <p>No notes saved yet.</p>
              ) : (
                <ul style={{ paddingLeft: "20px" }}>
                  {savedNotes.map((note, idx) => (
                    <li key={idx} style={{ marginBottom: "10px" }}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
