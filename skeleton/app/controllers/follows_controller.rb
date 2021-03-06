class FollowsController < ApplicationController
  before_action :require_logged_in!

  def create
    @follow = current_user.out_follows.create!(followee_id: params[:user_id])

    # simulate latency
    sleep(1)

    respond_to do |format|
      format.html { redirect_to request.referrer }
      format.json { render json: @follow }
    end
  end

  def destroy
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    @follow.destroy!
    
    # simulate latency
    sleep(1)

    respond_to do |format|
      format.html { redirect_to request.referrer }
      format.json { render json: @follow }
    end
  end
end
