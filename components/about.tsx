export function About() {
  return (
    <section className="container mx-auto px-4 py-4 max-w-4xl">
      <h2 className="text-xl font-medium mb-6">What I do:</h2>
      <ul className="space-y-3 text-gray-300">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Founder & Lead Developer at Nevaeh Solutions (Pty) Ltd.
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Build scalable web and mobile applications using modern frameworks and
          best practices
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Create intuitive user interfaces with focus on performance and
          accessibility
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          Transform complex business requirements into elegant technical
          solutions
        </li>
      </ul>
    </section>
  );
}
