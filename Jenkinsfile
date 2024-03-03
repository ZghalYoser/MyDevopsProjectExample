pipeline {
    agent any
    
    stages {
        stage('Build and Run Django') {
            steps {
                dir('monprojetdjango') {
                    script {
                        // Construire l'image Docker pour Django
                        sh 'docker build -t monprojetdjango .'
                        // Exécuter l'image Docker en tant que conteneur
                        sh 'docker run -d -p 8000:8000 monprojetdjango'
                    }
                }
            }
        }
        stage('Build and Run Angular') {
            steps {
                dir('monAppAngular') {
                    script {
                        // Construire l'image Docker pour Angular
                        sh 'docker build -t monappangular .'
                        // Exécuter l'image Docker en tant que conteneur
                        sh 'docker run -d -p 4200:4200 monappangular'
                    }
                }
            }
        }
    }
}
