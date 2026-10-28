import Hero from "./sections/Hero";
import Invite from "./sections/Invite";
import BrideGroom from "./sections/BrideGroom";
import ThingsToKnow from "./sections/ThingsToKnow";
import FollowAction from "./sections/FollowAction";
import Music from "./components/Music";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#08202f] font-body text-[#f4ecdb]">
      <main className="mx-auto max-w-[760px] shadow-2xl">
        <Hero />
        <Invite />
        <BrideGroom />
        <ThingsToKnow />
        <FollowAction />
      </main>
      <Music />
    </div>
  );
}

