require "test_helper"

class SamplesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sample = samples(:one)
  end

  test "should get index" do
    get samples_url, as: :json
    assert_response :success
  end

  test "should create sample" do
    assert_difference("Sample.count") do
      post samples_url, params: { sample: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show sample" do
    get sample_url(@sample), as: :json
    assert_response :success
  end

  test "should update sample" do
    patch sample_url(@sample), params: { sample: {  } }, as: :json
    assert_response :success
  end

  test "should destroy sample" do
    assert_difference("Sample.count", -1) do
      delete sample_url(@sample), as: :json
    end

    assert_response :no_content
  end
end
