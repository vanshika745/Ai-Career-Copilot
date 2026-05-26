export default function InterviewPrep() {
  return (
    <div className="flex-1 min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-6">
        Interview Prep
      </h1>

      <div className="space-y-5">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          Tell me about yourself
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          Why should we hire you?
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          Explain your projects
        </div>
      </div>
    </div>
  );
}