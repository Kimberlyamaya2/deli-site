// src/app/(marketing)/apply/page.tsx
export default function ApplyPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Join the Team</h1>
      <p className="mb-6">We’re hiring! Fill out the application below.</p>
      <div className="aspect-[4/5] w-full">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdInrwGuExWK5HWopJAnhmE6y87h10OcLlqEoGurR6BkFnS-w/viewform"
          className="w-full h-full border rounded-xl"
        />
      </div>
    </main>
  );
}
