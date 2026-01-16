export default function WhatWeDoNigeria() {
  const initiatives = [
    { title: "Grassroots Training", desc: "Providing fundamental basketball training to girls in local communities." },
    { title: "Mentorship", desc: "Connecting aspiring athletes with experienced mentors for guidance." },
    { title: "Education Support", desc: "Ensuring that basketball goes hand-in-hand with academic success." }
  ];

  return (
    <div className="container-custom py-20">
      <h1 className="text-5xl font-serif font-bold mb-12 text-center">What We Do – Nigeria</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {initiatives.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border">
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
