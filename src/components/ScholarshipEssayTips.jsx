import React, { useState } from 'react';
import { Download, ThumbsUp } from 'lucide-react';

const essayTips = [
  `✅ Understand the prompt thoroughly:
Before you even begin writing, read the essay prompt carefully. Make sure you understand what is being asked. Are they looking for leadership stories, challenges you’ve overcome, or your future goals? Tailor your response specifically to the question.

🔸 Example: If the prompt asks about a "time you made a difference in your community", don't write about your academic achievements. Focus on community impact—like organizing a neighborhood cleanup or tutoring students.`,

  `✍️ Use a compelling introduction:
Your first few lines should grab the reader’s attention. Start with a personal story, quote, or thought-provoking question that connects directly to your essay topic. A strong start makes reviewers want to keep reading.

🔸 Example: “When I stood in front of my school’s debate team for the first time, my hands trembled—but that fear turned into passion.” This opening pulls readers in with curiosity and emotion.`,

  `📌 Show, don’t just tell:
Instead of saying "I am a hard worker," share a specific example — like how you studied late nights for months to improve your grades or volunteered every weekend. Real stories prove your strengths better than vague claims.

🔸 Example: Instead of writing “I care about the environment,” write: “Every Sunday, I collect plastic waste from the riverbank near my village, filling nearly five bags each time.”`,

  `🌟 Highlight achievements wisely:
It’s okay to talk about your accomplishments, but stay humble. Focus on how those experiences shaped you or how you used your success to help others. This shows maturity and character.

🔸 Example: Rather than saying “I was the top scorer in class,” write: “Scoring the highest in my class gave me the confidence to mentor juniors who were struggling with math.”`,

  `🔍 Proofread carefully:
Spelling and grammar mistakes can weaken your message. After writing, take a break, then return with fresh eyes. Use grammar checkers like Grammarly or ask someone you trust to review it for you.

🔸 Example: Use this checklist — Spelling ✔ Punctuation ✔ Grammar ✔ Consistency ✔ Tone ✔ — before finalizing.`,

  `🎯 Stay focused and relevant:
Avoid drifting off-topic. Every paragraph should relate to the essay’s purpose. Stick to the point and cut out anything that doesn’t support your main message.

🔸 Example: If your essay is about financial hardship, don’t go too deep into your hobbies unless they connect to how you've coped or grown through the challenge.`,

  `🧠 Be honest and authentic:
Don’t try to write what you *think* the judges want to hear. Share your true story, voice, and passion. Scholarship committees are looking for real people with real stories, not perfect resumes.

🔸 Example: If you faced failure, talk about it openly: “Failing my first science exam taught me resilience. I worked hard to improve, and that struggle made me fall in love with learning.”`,
];


function ScholarshipEssayTips() {
  const [showTips, setShowTips] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleDownload = () => {
    const textContent = [
      "🎓 Scholarship Essay Tips",
      "",
      "Writing a great scholarship essay can make a real difference in winning funding for your education. Here are practical and detailed tips to help you stand out:",
      "",
      ...essayTips.map(tip => tip.replace(/^.*?(\n)/, '\n')), // Removes icon prefix from each tip for plain download
    ].join('\n\n');

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Scholarship_Essay_Tips.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-24">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-gray-800">🎓 Scholarship Essay Tips</h2>
          <button
            onClick={() => setShowTips(!showTips)}
            className="text-sm text-blue-600 hover:underline"
          >
            {showTips ? 'Hide Tips' : 'View Tips'}
          </button>
        </div>

        <p className="text-sm text-gray-700 mb-4">
          Writing a scholarship essay can feel overwhelming, but the right approach can truly make you stand out. Below are practical, easy-to-understand strategies that will help you write essays that impress scholarship committees.
        </p>

        {showTips && (
          <ul className="list-disc list-inside text-gray-800 text-sm space-y-4">
            {essayTips.map((tip, idx) => (
              <li key={idx} className="whitespace-pre-line">{tip}</li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-4 mt-6 text-sm">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
          >
            <Download size={16} />
            Download Tips
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 ${
              liked ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
            }`}
          >
            <ThumbsUp size={16} />
            {liked ? 'Marked Helpful' : 'Mark as Helpful'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScholarshipEssayTips;
