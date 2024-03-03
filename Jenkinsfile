pipeline {
    agent any
    
    stages {
        stage('Build and Run Django') {
            steps {
                dir('monprojetdjango') {
                    // Construire l'image Docker pour Django
                    bat 'docker build -t monprojetdjangotest .'
                    // Exécuter l'image Docker en tant que conteneur
                    bat 'docker run -d -p 8000:8000 monprojetdjangotest'
                }
            }
        }
        stage('Build and Run Angular') {
            steps {
                dir('monAppAngular') {
                    // Construire l'image Docker pour Angular
                    bat 'docker build -t monappangulartest .'
                    // Exécuter l'image Docker en tant que conteneur
                    bat 'docker run -d -p 4201:4200 monappangulartest'
                }
            }
        }
    }
}
