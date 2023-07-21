import Homepage from "@/components/Homepage/Homepage";

async function getData() {
  // const staticData = await fetch(`https://...`, { cache: 'force-cache' })
  // const dynamicData = await fetch(`https://...`, { cache: 'no-store' })
  const res = await fetch("https://api.example.com/...");
  return res.json();
}

export default function Home() {
  // const data = await getData();

  return <Homepage />;
}
