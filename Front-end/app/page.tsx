export default async function Home() {
  // Fetch directly on the server
  const res = await fetch("http://localhost:1337/api/courses?populate=category", {
    cache: "no-store", // always fresh (SSR), use "force-cache" for SSG
  });
  const data = await res.json();
  const courses = data.data || [];

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Courses</h1>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">No courses available</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {courses.map((course: any) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg p-5 border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{course.Title}</h2>
              <p className="text-gray-700 mb-2">{course.Description}</p>
              <p className="text-sm text-gray-500">
                Category:{" "}
                <span className="font-medium">
                  {course.category?.name || "Uncategorized"}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
