class PostsController < ApplicationController

  def index
    # メモを降順にする
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    redirect_to action: :index
  end
end
