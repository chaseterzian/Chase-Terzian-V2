Rails.application.routes.draw do

	root 'landing#index'

	get '/code' => 'code#index'
	get '/contact' => 'contact#index'
	get '/media' => 'media#index'
	get '/music' => 'music#index'

end
