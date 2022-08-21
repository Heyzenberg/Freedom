// Scroll Lock
const body = document.body;
let scrollTriggers = document.querySelectorAll('#switch-scroll');

scrollTriggers.forEach(scrollTrigger => {
    scrollTrigger.addEventListener('click', () => {
        if(scrollTrigger.classList.contains('active')) {
            enableScroll();
        }
        else if(!scrollTrigger.classList.contains('active')) {
            disableScroll();
        }
    })
})

function disableScroll() {
    body.classList.add('scroll-disable');

}
function enableScroll() {
    body.classList.remove('scroll-disable');
}


// General Buttons
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
		let thisMenuID = e.currentTarget.dataset.path;

        document.querySelectorAll('.window').forEach(thisWindow => {
			if (thisWindow.classList.contains('active')) {
                    thisWindow.classList.remove('active');
			}
			else if (thisWindow.getAttribute('data-target') == thisMenuID) {
                    thisWindow.classList.add('active');
                }
            else {
                thisWindow.classList.remove('active');
            }
		});
        document.querySelectorAll('.nav-link').forEach(e => {
			if (e.classList.contains('active')) {
					e.classList.remove('active');
			}
			else if	(e.getAttribute('data-path') == thisMenuID) {
                e.classList.add('active');
            }
            else {
                e.classList.remove('active');
            }
				
        });
    });
});


// Menu Videos
document.querySelectorAll('.option-link').forEach(e => {
    e.addEventListener('click', e => {
		let clickedMenuID = e.currentTarget.dataset.path;

        document.querySelectorAll('.option-window').forEach(e => {
			if (e.classList.contains('active')) {
                    e.classList.remove('active');
			}
			else if (e.getAttribute('data-target') == clickedMenuID) {
                    e.classList.add('active');
                }
            else {
                e.classList.remove('active');
            }
		});
        document.querySelectorAll('.option-link').forEach(e => {
			if (e.classList.contains('active')) {
					e.classList.remove('active');
			}
			else if	(e.getAttribute('data-path') == clickedMenuID) {
                e.classList.add('active');
            }
            else {
                e.classList.remove('active');
            }
				
        });
    });
});


// Hover Lang
const selectItems = document.querySelectorAll('.select_item');

selectItems.forEach(selectItem => {
    selectItem.addEventListener('mouseenter', () => {
        selectItem.classList.add('hover');
    })
    selectItem.addEventListener('mouseleave', () => {
        selectItem.classList.remove('hover');
    })
})


// Hover Other Btn
document.querySelectorAll('.mouse-on').forEach(thisBtn => {
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return;
    }
    else{
        thisBtn.addEventListener('mouseenter', () => {
            thisBtn.classList.add('hover');
        })
        thisBtn.addEventListener('mouseleave', () => {
            thisBtn.classList.remove('hover');
        })        
    }
});


// Lang Btn Text
let selectBtn = document.querySelector('.select-btn');
let selectList = document.querySelector('.lang_menu');
let selectLang = document.querySelectorAll('.select_item');

selectLang.forEach(lang => {
    lang.addEventListener('click', () => {
        selectBtn.innerText = lang.innerText;
        selectList.classList.remove('active');
        selectBtn.classList.remove('active');
        enableScroll()
    })
})