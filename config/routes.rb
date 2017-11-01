Rails.application.routes.draw do

	root 'landing#index'

	get '/code' => 'code#index'
	get 'code/gearbox' => 'code#gearbox'
	get 'code/theprojects' => 'code#theprojects'
	get 'code/whiteboard' => 'code#whiteboard'

	get '/contact' => 'contact#index'
	get '/media' => 'media#index'
	get '/music' => 'music#index'
	get '/resume' => 'resume#index'

end
