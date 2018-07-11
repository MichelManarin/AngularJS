class ConexaoBanco {

    constructor() {
        throw new Error('Class Static');
    }

    static login(auth,username,pass){

        

        /*
        if (isLogged) {
            window.location.href = "https://michelmanarin.github.io/portfolio.html";
        } else {

            firebase.auth().signInWithEmailAndPassword(username, password)
                .then(function() {
                    window.location.href = "https://michelmanarin.github.io/portfolio.html";
                })
                .catch(function(error) {
                    
                    if (error.code === 'auth/wrong-password') {
                        swal('Senha incorreta');
                    } else if (error.code === 'auth/invalid-email') {
                        swal('E-mail inválido');
                    } else if (error.code === 'auth/user-disabled') {
                        swal('Usuário desabilitado');
                    } else if (error.code === 'auth/user-not-found') {
                        swal('Usuário incorreto');
                    } else {
                        swal(error.message);
                    }
                });   
        }*/
    }

    static logout(){

        e.preventDefault();
        
        firebase.auth().signOut()
            .then(function(firebaseUser) {
                window.location.href = "https://michelmanarin.github.io/index.html";
            })
            .catch(function(error) {
                swal("Erro ao fazer logoff. " + error.message);
            });
    }


    

    static isLogged(){
        if (firebase.auth().currentUser != null) {
            return true;
        } 
        return false;
    }

    static getUserLogged(){
        return firebase.auth().currentUser;
    }

    static createUser(email, password){

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                swal("Excelente!", "Usuário criado com sucesso!", "success");
            })
            .catch(function(error) {

                if (error.code === 'auth/email-already-in-use') {
                    swal('E-mail já em uso.');
                } else if (error.code === 'auth/invalid-email') {
                    swal('E-mail inválido');
                } else if (error.code === 'auth/user-disabled') {
                    swal('Usuário desabilitado');
                } else if (error.code === 'auth/operation-not-allowed') {
                    swal('Operação não permitida');
                } else if (error.code === 'auth/weak-password') {
                    swal('Senha é muito fraca');
                } else {
                    swal(error.message);
                }
            });
    }

      /////////////////////////////////////////
     //////* [READ AND WRITE METHODS] *///////
    /////////////////////////////////////////

    static write(data,node) {

        if (this.isLogged == false)
            throw new Error("Não está logado");

        if (typeof(node) != "string")
            throw new Error("Esperado uma string");
        
        if (typeof(data) != "object")
        throw new Error("Esperado um object");

        let updates = {};
        let user = this.getUserLogged();
        let key  = firebase.database().ref().child(node).push().key;
        
        updates[user.uid + '/' + node + '/' + key] = data;
    
        firebase.database().ref().update(updates)
            
            .then(function() {

                this._controller.clean();
                this._controller.updateCard();

                if (this._controlMessage)
                    swal("Registro inserido com sucesso.")
                else
                    this._controller.showMessage("Registro inserido com sucesso.");
                
            })

            .catch(function(error) {
                if (this._controlMessage)
                    swal("Não foi possível realizar a inserção/update : \n" + error.message);
                else
                    this._controller.showMessage("Não foi possível realizar a inserção/update : \n" + error.message);
                
            });;

        return key;
    }


    static read(node,firebase){

        if (typeof(node) != "string")
            throw new error("Esperado string ");

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {

                var obj = firebase.database().ref(user + '/' + node);

                obj.once('value', function(snapshot) {

                    var pessoas = snapshot.val();

                    if (pessoas != null)
                        this._controller.afterRead(pessoas);
                });
          
            } else {
                swal('Usuário não está autentificado: \n\n Guardian Route ainda não foi implementado. Para uma melhor experiencia e acesso ao banco de dados realize o login.');
            }
        });

        
    }
    
    


    
}