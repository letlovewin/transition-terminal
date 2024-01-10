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

<div class="position-fixed vstack gap-3 border-end top-0 h-100 z-3 bg-light" style="width:75px;"id="desktop-navbar">
    <a href="/home">
        <img
            src={"icon.png"}
            alt="Greek symbol for Lambda in pink"
            style="width:50px;height:50px"
            class="mx-3 mt-2"
        />
    </a>
    <br />
    <button type="button" class="btn btn-sm btn-outline-primary rounded-pill border-0 mx-3 mt-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg>
        <br />
        Me
    </button>
    <div class="btn-group dropend position-absolute bottom-0 start-50 translate-middle-x">
        <button type="button" class="btn btn-sm my-2 btn-outline-primary rounded-pill border-0" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            More
        </button>
        <ul class="dropdown-menu">
            <li><button class="btn btn-sm">Settings</button></li>
            <li><button class="btn btn-sm" on:click={logOut}>Sign out</button></li>
        </ul>
      </div>
</div>


<div class="position-fixed bottom-0 border-top w-100 z-3 bg-light" style="height:50px;" id="mobile-navbar">
    <a href="/home">
        <img
            src={"icon.png"}
            alt="Greek symbol for Lambda in pink"
            style="width:30px;height:30px;"
            class="mx-4 mt-1"
        />
    </a>
    <button class="btn btn-outline-primary border-0 my-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg>
    </button>
    <div class="dropup-center dropup position-absolute mb-1 bottom-0 end-0">
        <button class="btn btn-sm btn-outline-primary border-0 me-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
        </button>
        <ul class="dropdown-menu">
            <li><button class="btn btn-sm">Settings</button></li>
            <li><button class="btn btn-sm" on:click={logOut}>Sign out</button></li>
        </ul>
      </div>
</div>

<style>
    @media only screen and (max-width: 600px) {
        #desktop-navbar {
            display: none;
        }
        #mobile-navbar {
            display: block;
        }
    }
    @media only screen and (min-width: 601px) {
        #desktop-navbar {
            display: block;
        }
        #mobile-navbar {
            display: none;
        }
    }
</style>