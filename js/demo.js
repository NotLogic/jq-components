// 单个头像、图片
function avatarSingle () {
  $('#avatar_single').renderAvatar({
    avatar: 'http://www.liubinbin.com.cn/media/1.jpg',
    width: '100px'
  });
}
// 多个头像、图片
function avatarBatch () {
  var avatarParamsArr = [
    {
      avatar: 'http://www.liubinbin.com.cn/media/1.jpg',
      width: '50px',
      borderRadius: 'unset',
      margin: '30px'
    },
    {
      avatar: 'http://www.liubinbin.com.cn/media/2.jpg',
      width: '60px',
      borderRadius: '10px',
      margin: '40px 10px 50px'
    },
    {
      avatar: 'http://www.liubinbin.com.cn/media/3.jpg',
      width: '70px',
      borderRadius: '20px',
      margin: '20px 10px 50px 40px'
    },
    {
      avatar: 'http://www.liubinbin.com.cn/media/4.jpg',
      width: '80px',
      borderRadius: '30px',
      margin: '10px 10px 50px 40px'
    },
    {
      avatar: 'http://www.liubinbin.com.cn/media/5.jpg',
      width: '90px',
      borderRadius: '40px'
    }
  ]
  var html = ''
  for (var i = 0; i < avatarParamsArr.length; i++) {
    var params = avatarParamsArr[i] || {};
    html += $.getAvatarHtml(params);
  }
  $('#avatar_batch').html(html)
}

// 上传文件
function upload () {
  var $upload = $('#upload_demo .upload');
  var param = {
    width: '150px',
    multiple: true,
    onChange: function (files) {
      console.log('回传的files:', files);
    }
  };
  $upload.renderUpload(param);
  var $upload2 = $('#upload_demo .upload2');
  var param2 = {
    width: '200px',
    onChange: function (files) {
      console.log('回传的files:', files);
      upload2.setLoading($upload2, true);
      setTimeout(function () {
        upload2.setLoading($upload2, false);
      }, 2000)
    }
  };
  var upload2 = $upload2.renderUpload(param2);
}
// 详情渲染
function detailRender () {
  var $target = $('#detail_render');
  var columns = [
    {
      key: 'name',
      title: '姓名：'
    },
    {
      key: 'birthday',
      title: '出生日期：',
      render: function (data) {
        var birthday = data.birthday || '';
        return birthday ? moment(birthday).format('YYYY-MM-DD HH:mm') : ''
      }
    }
  ];
  var data = {
    name: '张三',
    birthday: Date.now()
  };
  $target.renderDetail({
    data,
    columns,
    leftTextAlign: 'right'
  });
}

// 单个头像
avatarSingle();
// 批量头像
avatarBatch();
// 上传文件
upload();
// 详情渲染
detailRender();
