;(function ($) {
  /**
   * @description: 获取用于渲染的头像字符串，可用于循环渲染头像、图片
   * @param {Object object} params 配置参数
   * param.avatar *{string} 头像路径——必传
   * param.width {string} 头像宽度，默认80px
   * param.height {string}  头像宽度,默认和宽度相同
   * params.borderRadius {string, number, object} 圆角 string类型直接设置，object类型不同的角弧度或样式不同，默认50%
   * params.backgroundColor {string} 背景色, 默认unset
   * params.margin {string} 外边距
   * @return: 头像html字符串
   */
  function getAvatarHtml (params) {
    var CONTAINER_STR = '<div class="logic_avatar_container"></div>';
    var AVATAR_STR = '<img class="logic_avatar" />'
    var $container = $(CONTAINER_STR);
    var $avatar = $(AVATAR_STR);
    var avatar = params.avatar || '';
    var width = params.width || '80px';
    var height = params.height || width;
    var borderRadius = params.borderRadius || '50%';
    var backgroundColor = params.backgroundColor || 'unset';
    var margin = params.margin || 'unset';
    var css = {
      width: width,
      height: height,
      borderRadius: borderRadius,
      backgroundColor: backgroundColor,
      margin: margin
    }
    $container.css(css);
    if (avatar) {
      $avatar.attr('src', avatar);
      $container.append($avatar);
    }
    return $container[0].outerHTML;
  }
  /**
   * @description: 渲染头像
   * @param {Object object} params 配置参数, 详细参数见getAvatarHtml方法中的params
   * @return: null
   */
  function renderAvatar (params) {
    var html = getAvatarHtml(params)
    $(this).html(html)
  }
  $.extend({
    // 获取用于渲染的头像字符串，可用于循环渲染头像、图片
    getAvatarHtml: getAvatarHtml,
  });
  $.fn.extend({
    // 渲染头像、图片
    renderAvatar: renderAvatar,
  })
})(jQuery);
