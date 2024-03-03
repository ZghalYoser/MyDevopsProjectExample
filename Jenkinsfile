pipeline {
    agent any
    
    stages {
        stage('Build and Run Django') {
            steps {
                dir('monprojetdjango') {
                    // Construire l'image Docker pour Django
                    bat 'docker build -t monprojetdjango .'
                    // Exécuter l'image Docker en tant que conteneur
                    bat 'docker run -d -p 8000:8000 monprojetdjango'
                }
            }
        }
        stage('Build and Run Angular') {
           steps {
                dir('monAppAngular') {
                    bat 'docker build -t monappangular .'
                    bat 'docker run -d -P monappangular'
                    bat 'docker port nom_conteneur_angular'
                }
        }
    }
}
