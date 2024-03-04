pipeline {
    agent any
    
    environment {
        DJANGO_IMAGE = 'monprojetdjangotest'
        DJANGO_CONTAINER = 'djangoApp'
        ANGULAR_IMAGE = 'monappangulartest'
        ANGULAR_CONTAINER = 'angularApp'
    }

    stages {
        stage('Build and Run Django') {
            steps {
                dir('monprojetdjango') {
                    // Supprimer le conteneur s'il existe déjà
                    bat 'docker rm -f %DJANGO_CONTAINER% || true'
                    // Construire l'image Docker pour Django
                    bat 'docker build -t %DJANGO_IMAGE% .'
                    // Exécuter l'image Docker en tant que conteneur
                    bat 'docker run -d --name %DJANGO_CONTAINER% -p 8002:8000 %DJANGO_IMAGE%'
                }
            }
        }
        stage('Build and Run Angular') {
            steps {
                dir('monAppAngular') {
                    // Supprimer le conteneur s'il existe déjà
                    bat 'docker rm -f %ANGULAR_CONTAINER% || true'
                    // Construire l'image Docker pour Angular
                    bat 'docker build -t %ANGULAR_IMAGE% .'
                    // Exécuter l'image Docker en tant que conteneur
                    bat 'docker run -d --name %ANGULAR_CONTAINER% -p 4201:4200 %ANGULAR_IMAGE%'
                }
            }
        }
    }
    
  
}
