;(function ($) {
  /**
   * @description: 渲染上传组件
   * @param {type} params 配置项
   * params.width 宽度
   * params.height 高度 默认等于高度
   * params.accept 可以上传的文件描述
   * params.multiple {boolean} 是否支持多个文件上传
   * params.loading 是否展示加载中
   * params.onChange 文件选择改变时
   * @return: RenderUpload
   */
  function RenderUpload (params) {
    var CONTAINER_STR =
      `<div class="logic_upload_container">
        <input type="file">
        <div class="logic_upload_box logic_before_upload">
          <span class="logic_upload_icon">+</span>
        </div>
        <div class="logic_upload_box logic_upload_loading">
          <div class="loading_svg">
            <svg t="1594450778373" class="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2300"><path d="M523.085935 101.849403m-101.850403 0a101.850403 101.850403 0 1 0 203.700806 0 101.850403 101.850403 0 1 0-203.700806 0Z" fill="#000000" p-id="2301"></path><path d="M769.836489 187.508901m-96.031437 0a96.031437 96.031437 0 1 0 192.062875 0 96.031437 96.031437 0 1 0-192.062875 0Z" fill="#000000" p-id="2302"></path><path d="M903.286707 381.395765m-90.210471 0a90.210471 90.210471 0 1 0 180.420943 0 90.210471 90.210471 0 1 0-180.420943 0Z" fill="#000000" p-id="2303"></path><path d="M905.950692 609.722427m-84.390506 0a84.390506 84.390506 0 1 0 168.781011 0 84.390506 84.390506 0 1 0-168.781011 0Z" fill="#000000" p-id="2304"></path><path d="M799.997313 786.127394m-78.57054 0a78.57054 78.57054 0 1 0 157.141079 0 78.57054 78.57054 0 1 0-157.141079 0Z" fill="#000000" p-id="2305"></path><path d="M605.196454 889.708787m-72.750574 0a72.750574 72.750574 0 1 0 145.501148 0 72.750574 72.750574 0 1 0-145.501148 0Z" fill="#000000" p-id="2306"></path><path d="M397.148673 877.857856m-66.931608 0a66.931608 66.931608 0 1 0 133.863216 0 66.931608 66.931608 0 1 0-133.863216 0Z" fill="#000000" p-id="2307"></path><path d="M223.665689 762.483532m-61.110641 0a61.110642 61.110642 0 1 0 122.221283 0 61.110642 61.110642 0 1 0-122.221283 0Z" fill="#000000" p-id="2308"></path><path d="M134.483212 587.14856m-55.290676 0a55.290676 55.290676 0 1 0 110.581352 0 55.290676 55.290676 0 1 0-110.581352 0Z" fill="#000000" p-id="2309"></path><path d="M135.396207 408.896604m-49.47071 0a49.47071 49.47071 0 1 0 98.94142 0 49.47071 49.47071 0 1 0-98.94142 0Z" fill="#000000" p-id="2310"></path><path d="M205.336797 260.047476m-43.650744 0a43.650744 43.650744 0 1 0 87.301488 0 43.650744 43.650744 0 1 0-87.301488 0Z" fill="#000000" p-id="2311"></path><path d="M315.81515 159.990063m-37.829779 0a37.829778 37.829778 0 1 0 75.659557 0 37.829778 37.829778 0 1 0-75.659557 0Z" p-id="2312"></path></svg>
          </div>
        </div>
      </div>`;
    var width = params.width || '150px';
    var height = params.height || width;
    var accept = params.accept || '';
    var multiple = !!params.multiple;
    var css = {
      width: width,
      height: height
    };
    var loading = !!params.loading;
    var $target = $(CONTAINER_STR);
    var $fileInput = $target.find('input');
    var attr = {};
    accept && (attr.accept = accept);
    multiple && (attr.multiple = multiple);
    $fileInput.attr(attr);
    $target.css(css);
    if (loading) {
      $target.find('.logic_before_upload').css('zIndex', '-1');
      $target.find('.logic_upload_loading').css('zIndex', '1');
    } else {
      $target.find('.logic_before_upload').css('zIndex', '1');
      $target.find('.logic_upload_loading').css('zIndex', '-1');
    }
    // 点击上传
    $target.find('.logic_before_upload').on('click', function () {
      if (loading) return
      $fileInput[0].click();
    });
    // 选择文件后
    $fileInput.on('change', function (e) {
      var files = e.currentTarget.files;
      $(this).val();
      typeof params.onChange === 'function' && params.onChange(files)
    })
    $(this).append($target);
    return RenderUpload
  }
  // 向外部提供的方法
  RenderUpload.setLoading = function ($target, loading) {
    if (loading) {
      $target.find('.logic_before_upload').css('zIndex', '-1');
      $target.find('.logic_upload_loading').css('zIndex', '1');
    } else {
      $target.find('.logic_before_upload').css('zIndex', '1');
      $target.find('.logic_upload_loading').css('zIndex', '-1');
    }
  }
  $.fn.extend({
    renderUpload: RenderUpload
  })
})(jQuery);
