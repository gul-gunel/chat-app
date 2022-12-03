import { ref } from "vue";
import { projectAuth } from "../firebase/config";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
	// console.log('User state change. Current user is :', _user );
	user.value = _user;
}); // *1
/*
	*1 : bu user üzerinde, auth üzerinde herhangi bir state değiştiği anda, kullanıcı değişti şuanki user durumunu güncelliyor olmalıyız. 
*/

const getUser = () => {
	return { user };
};

export default getUser;