import "firebase/app";
import "firebase/database";
function load({ params }) {
  return {
    context: {
      uid: params.uid
    }
  };
}
export {
  load
};
