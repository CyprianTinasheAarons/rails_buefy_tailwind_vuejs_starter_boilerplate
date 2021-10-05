require "test_helper"

class ButtonControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get button_index_url
    assert_response :success
  end
end
