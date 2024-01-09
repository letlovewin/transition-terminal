<script>
    import { getApp } from "firebase/app";
    import { getAuth, signOut } from "firebase/auth";
    const app = getApp();
    const auth = getAuth(app);

    function logOut() {
        signOut(auth)
    }
</script>
<!--If screen width is < 450px we switch to the horizontal navbar at the bottom-->

<div class="position-fixed vstack gap-3 border-end top-0 h-100" id="desktop-navbar">
    <a href="/home">
        <img
            src={"icon.png"}
            alt="Greek symbol for Lambda in pink"
            style="width:50px;height:50px"
            class="mx-4 mt-2"
        />
    </a>
    <div class="btn-group dropend position-absolute bottom-0 start-50 translate-middle-x">
        <button type="button" class="btn btn-sm my-2 btn-outline-primary rounded-pill dropdown-toggle border-0" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            More
        </button>
        <ul class="dropdown-menu">
            <li><button class="btn btn-sm" on:click={logOut}>Sign out</button></li>
        </ul>
      </div>
</div>


<div class="position-fixed bottom-0 border-top w-100" id="mobile-navbar">
    <a href="/home">
        <img
            src={"icon.png"}
            alt="Greek symbol for Lambda in pink"
            style="width:50px;height:50px"
            class="mx-4 my-2"
        />
    </a>
    <div class="dropup-center dropup position-absolute bottom-0 end-0">
        <button class="btn btn-outline-primary border-0 dropdown-toggle my-2 me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
        </button>
        <ul class="dropdown-menu">
            <li><button class="btn btn-sm" on:click={logOut}>Sign out</button></li>
        </ul>
      </div>
</div>

<style>
    @media only screen and (max-width: 530px) {
        #desktop-navbar {
            display: none;
        }
        #mobile-navbar {
            display: block;
        }
    }
    @media only screen and (min-width: 531px) {
        #desktop-navbar {
            display: block;
        }
        #mobile-navbar {
            display: none;
        }
    }
</style>