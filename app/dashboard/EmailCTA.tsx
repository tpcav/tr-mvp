import Image from 'next/image'

export default function EmailCTA() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-900">
      <div className="mx-auto max-w-4xl px-10 py-16 lg:px-10 text-left border border-white rounded-lg bg-slate-800 shadow-xl">
        <h2 className="text-5xl font-bold text-white">
          🤖 Teacher's Robot
        </h2>
        <p className="mt-4 text-lg text-blue-200">
          Get smarter on the latest AI news and tools for education. The weekly email to stay up to date on all this crazy AI advancement.
        </p>
        <div className="mt-8">
          <form className="flex flex-col sm:flex-row gap-4 sm:gap-0 md:gap-0 lg:gap-0 items-center justify-center">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full sm:w-auto flex-auto px-4 py-3 leading-tight text-gray-700 bg-white border rounded-t sm:rounded-t-none sm:rounded-l shadow appearance-none focus:outline-none focus:shadow-outline"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-indigo-600 rounded-b sm:rounded-b-none sm:rounded-r shadow hover:bg-blue-800 focus:shadow-outline focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


