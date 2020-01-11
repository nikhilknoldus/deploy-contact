node{
stage('SCM Checkout'){
git 'https://github.com/nikhilknoldus/deploy-contact'
}
stage('install packages'){
sh 'PATH=/sbin:/usr/sbin:/usr/bin:/usr/local/bin | npm install'
}
stage('build project'){
sh 'npm start'
}
}
