class ApplicationController < ActionController::Base

  def current_user
    user_id = session[:user_id]
    user_id && Person.find(user_id)
  end

  def authenticate!
    unless current_user
      flash[:info] = "You have to be logged in to do that!"
      redirect_to pets_path
    end
  end

end
