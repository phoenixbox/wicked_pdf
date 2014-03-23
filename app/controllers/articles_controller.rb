class ArticlesController < ApplicationController

  def index
    @articles = ["Article 1", "Article 2", "Article 3", "Article 4"]

    respond_to do |format|
      format.html

      format.pdf do
        render  :pdf => "articles-list-report",
                :header => {:center => "COMPANY NAME"},
                :footer => {:center => "[page] of [topage]"},
                :show_as_html => params[:debug].present?
      end
    end
  end
end
