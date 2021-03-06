(function(global, doc, $) {

	// SVGInjector : Style 설정
	var svgInjection = function() {
		// IE8, console.log() 오류 안나게
		if (!window.console) {
			console = {
				log: function() {}
			};
		};
		// img.inject-me 요소 수집해서 mySVGsToInject 변수에 참조
		var mySVGsToInject = doc.querySelectorAll('img.inject-svg');
		// SVG 주입(Injector) 설정 옵션
		var injectorOptions = {
			evalScripts: 'once', // always, once, never
			pngFallback: 'images/ie-assets', // PNG 대체 폴더 설정
			each: function(svg) {
				// svg는 수집된 개별 img.inject-me를 가리킴
				console.log(svg.id);
			}
		};
		// SVGInjector 함수에 연결
		SVGInjector(
			// 수집된 img.inject-me 요소
			mySVGsToInject,
			// SVG 주입(Injector) 설정 옵션
			injectorOptions,
			// 콜백 함수
			function(totalSVGsInjected) {
				// totalSVGsInjected는 SVG 주입된 설정 개수를 출력
				// console.log(totalSVGsInjected);
			}
		);
	};

	// Checkbox or Radio Style 설정
	var kalypto = function() {
		// Checkbox Script
		$("input[type=checkbox]").kalypto();
		// Radio Script
		$("input[type=radio]").kalypto({
			hideInputs: false,
			toggleClass: "k_toggleR"
		});
	};

	var $html = $('html'),
		_html = global.html = doc.documentElement,
		_ua = global.UA = global.navigator.userAgent;

	// IE 10, 11 체크
	function checkSetClassPropIE() {
		if (_ua.indexOf('MSIE 10') > -1) {
			$html.addClass('lt-ie11 ie10'); // IE10 버전 체크하여 <html> 요소에 class=lt-ie11 ie10 을 적용
		} else if (_ua.indexOf('rv:11') > -1) {
			$html.addClass('lt-ie11 ie11'); // IE11 버전 체크하여 <html> 요소에 class=lt-ie11 ie11 을 적용

		}
	}

	// IE 10, 11 초기 수행코드 실행
	checkSetClassPropIE();

	// IMG => SVG로 변환, ie9 이하 버전 PNG로 대체
	svgInjection();

	// Checkbox or Radio Style 설정
	kalypto();

	// 부드럽게 스크롤 움직임
	smoothScroll.init();

	// Loading Image 사용
	echo.init({
		offset: 10,
		throttle: 250 // 불러오는 시간
	});

	// Lazy Load Plugin for jQuery
	$("img.lazy").lazyload();

	// Popup Script
	// 팝업이 링크 될 요소
	$('.trigger-pop-login').popupLayer();
	$('.trigger-pop-reviews').popupLayer();
	// 위치 이동 드래그 될 팝업창
	$('.popup-layer .container').draggable({
		//지정된 영역안에서만 이동
		containment: "#container"
	});

	// Select Box Style 설정
	$('.select-style select').stbDropdown();

	// Store & Designer 검색 input 요소 편집할 수 없게 설정
	$( '[class$="-search-set"] li input[type=text]' ).attr('readonly', true);

	// 리스트 타입 설정 (목록형, 카드형)
	(function() {
		var btnListType = $('.list-type'),
			btnList = $('.list-type-setting .btn-list'),
			btnCard = $('.list-type-setting .btn-card');

		btnList.click(function(e) {
			btnList.addClass ( "selected" );
			btnCard.removeClass ( "selected" );
			btnListType.addClass('line');
			btnListType.removeClass('card');
			e.stopPropagation ();
		});
		btnCard.click(function(e) {
			btnCard.addClass ( "selected" );
			btnList.removeClass ( "selected" );
			btnListType.addClass('card');
			btnListType.removeClass('line');
			e.stopPropagation ();
		});
	})();

})(window, document, window.jQuery);