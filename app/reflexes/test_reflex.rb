class TestReflex < ApplicationReflex
  def value_changed
    html = "<div id='result'>Rendered via Reflex at #{Time.now}</div>"
    morph "#result", html
  end
end
