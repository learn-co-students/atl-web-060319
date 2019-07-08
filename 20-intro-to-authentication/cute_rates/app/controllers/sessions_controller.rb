class SessionsController < ApplicationController
  def new
  end

  def create
    @person = Person.find_by(username: params[:username])
    if @person && @person.authenticate(params[:password])
      session[:user_id] = @person.id
      flash[:info] = "Login Successful!"
      redirect_to pets_path
    else
      @error = "No such username or wrong password."
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to pets_path
  end
end