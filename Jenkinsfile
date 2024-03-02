pipeline {
    agent any

    environment {
        DJANGO_SETTINGS_MODULE = 'your_project.settings'
    }

    stages {
        stage('Préparation') {
            steps {
                checkout scm
            }
        }
        
        stage('Installer Dépendances Backend') {
            steps {
                dir('backend') {
                    sh 'python -m venv venv'
                    sh '. venv/bin/activate'
                    sh 'pip install -r requirements.txt'
                }
            }
        }

        stage('Tester Backend') {
            steps {
                dir('backend') {
                    sh '. venv/bin/activate'
                    sh 'python manage.py test'
                }
            }
        }
        
        stage('Installer Dépendances Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Construire Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Tester Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }

        stage('Déployer') {
            steps {
                // Ajoutez vos commandes de déploiement ici
                // Par exemple, déployer sur un serveur ou un service cloud
                echo 'Déployer le backend et le frontend'
            }
        }
    }
}

