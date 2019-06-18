class Api::HomesController < ApplicationController

  before_action :set_home, only: [:show, :edit, :destroy]

  def index
    render json: Home.all
  end

  def create
    home = Home.new(home_params)
    if home.save
      render json: home_params
    else
      render json: { message: home.errors }, status: 400
    end
  end

  def show
    render json: Home.find_by(id: params[:id])
  end

  def edit
    if @home.update(home_params)
      render json: @home
    else
      render json: { message: home.errors }, status: 400
    end
  end

  def destroy
    if @home.destroy
      render json: { message: "Successfully Deleted" }, status: 204
    else
      render json: { message: "Unable to Delete" }, status: 400
    end
  end

  private

  def set_home
    @home = Home.find_by(id: params[:id])
  end

  def home_params
    params.require(:home).permit(:name, :price, :location, :image)

  end


end
