function ResumePreview({ data }) {
  return (
    <div style={{ padding: "40px", color: "#fff", background: "#000" }}>
      <h1>{data.personal.name}</h1>
      <h3>{data.personal.title}</h3>
      <p>{data.personal.summary}</p>

      <h2>Experience</h2>
      {data.experience.map((e, i) => (
        <p key={i}>
          <strong>{e.jobTitle}</strong> – {e.company}
        </p>
      ))}

      <h2>Skills</h2>
      <ul>
        {data.skills.map((s, i) => <li key={i}>{s.name}</li>)}
      </ul>
    </div>
  );
}

export default ResumePreview;
