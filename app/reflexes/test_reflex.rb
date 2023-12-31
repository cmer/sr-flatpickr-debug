class TestReflex < ApplicationReflex
  def value_changed
    klasses = [
      "shadow-md border rounded-md border-gray-600 bg-gray-50 px-2 py-1 text-md font-medium text-gray-600",
      "shadow-md border rounded-md border-red-700 bg-red-50 px-2 py-1 text-md font-medium text-red-700",
      "shadow-md border rounded-md border-yellow-800 bg-yellow-50 px-2 py-1 text-md font-medium text-yellow-800",
      "shadow-md border rounded-md border-green-700 bg-green-50 px-2 py-1 text-md font-medium text-green-700",
      "shadow-md border rounded-md border-blue-700 bg-blue-50 px-2 py-1 text-md font-medium text-blue-700",
      "shadow-md border rounded-md border-indigo-700 bg-indigo-50 px-2 py-1 text-md font-medium text-indigo-700",
      "shadow-md border rounded-md border-purple-700 bg-purple-50 px-2 py-1 text-md font-medium text-purple-700",
      "shadow-md border rounded-md border-pink-700 bg-pink-50 px-2 py-1 text-md font-medium text-pink-700"
    ]

    html = "<div id='result'><div class='#{klasses.sample}'>Rendered via Reflex at <strong>#{Time.now}</strong></div></div>"
    morph "#result", html
  end
end
