/// <reference path='./accelerator.ts' />
/// <reference path='./applause-button.ts' />
/// <reference path='./gist-embed.ts' />
/// <reference path='./goatcounter.ts' />
/// <reference path='./giscus.ts' />
/// <reference path='../../node_modules/darkreader/darkreader.js' />
/// <reference types='darkreader' />

function InitSpoilers() {
    const spoilers = document.querySelectorAll('.spoiler');
    for (let i = 0, n = spoilers.length; i < n; i++) {
        const element = spoilers[i];
        element.addEventListener('click', () => element.classList.remove('spoiler'));
    }
}

function DisableDarkMode() {
    DarkReader.disable();
}

function EnableDarkMode() {
    DarkReader.setFetchMethod(window.fetch);
    DarkReader.enable({brightness: 100, contrast: 107, sepia: 10});
}

function InitDarkMode() {
    localStorage.getItem('darkmode') != 'disabled'
        ? EnableDarkMode()
        : DisableDarkMode();
}

function InitDarkModeButton() {
    function ToggleDarkMode() {
        document.body.style.transition = "background-color 0.2s ease-in-out";

        const navbar = document.querySelectorAll('.navbar');
        for (let i = 0, n = navbar.length; i < n; i++) {
            (navbar[i] as HTMLElement).style.transition = "background-color 0.2s ease-in-out";
        }
        const enabled = localStorage.getItem('darkmode') != 'disabled'; // enabled by default
        localStorage.setItem('darkmode', enabled ? 'disabled' : 'enabled');
        InitDarkMode();
        InitGiscus();
    }

    const buttons = document.querySelectorAll('#toggle-darkmode');
    for (let i = 0, n = buttons.length; i < n; i++) {
        buttons[i].addEventListener('click', ToggleDarkMode);
    }
}

function InitAccelerate() {
    accelerate(BeforeAcceleratedPageLoad, AfterAcceleratedPageLoad, ShowNetworkError);

    function BeforeAcceleratedPageLoad() {
    }

    function AfterAcceleratedPageLoad() {
        InitSpoilers();
        InitGistEmbed();
        InitGiscus();
        InitDarkModeButton();
        InitSearch();
        GoatCounterCountHit();
    }

    function ShowNetworkError() {
        let error = document.querySelector('#error-alert');
        error.innerHTML = "<strong>Unable to navigate to page.</strong> I don't mean to shift the blame, but please check your network connection.";
        error.classList.remove('.d-none');
    }
}

function InitSearch() {
    if (document.querySelector("#search")) {
        // @ts-ignore
        return new PagefindUI({element: "#search", bundlePath: "/assets/pagefind/"});
    }
    if (document.querySelector("#search-unity-docs")) {
        // @ts-ignore
        return new PagefindUI({element: "#search-unity-docs", bundlePath: "/assets/pagefind-unity-docs/", baseUrl: "https://docs.unity3d.com/", showImages: false});
    }
}

InitDarkMode();
InitAccelerate();

window.addEventListener('DOMContentLoaded', () => {
    InitDarkModeButton();
    InitSpoilers();
    InitApplauseButton();
    InitGistEmbed();
    GoatCounterCountHit();
    InitGoatCounterEvents();
    InitSearch();
    setTimeout(InitGiscus, 4000);
});
