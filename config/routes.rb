Rails.application.routes.draw do

	root 'landing#index'

	get '/home' => 'landing#index'

	get '/code' => 'code#index'
	get '/gearbox' => 'code#gearbox'
	get '/theprojects' => 'code#theprojects'
	get '/whiteboard' => 'code#whiteboard'

	get '/contact' => 'contact#index'
	get '/media' => 'media#index'
	get '/music' => 'music#index'
	get '/resume' => 'resume#index'

end
