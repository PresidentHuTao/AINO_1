import {jwtDecode} from 'jwt-decode';  // Sử dụng đúng cách khi import jwtDecode

const login = async (tenTaiKhoan, matKhau, navigate) => {
  try {
    // Gửi yêu cầu đăng nhập đến API
    const response = await fetch('http://localhost:8080/rest/tai_khoan_nguoi_dung/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Chỉ định nội dung là JSON
      },
      body: JSON.stringify({ tenTaiKhoan, matKhau }), // Gửi dữ liệu tên tài khoản và mật khẩu
    });

    // Kiểm tra nếu đăng nhập thất bại (mã 401)
    if (response.status === 401) {
      console.log('Đăng nhập thất bại: Tên đăng nhập hoặc mật khẩu không đúng');
      return;  // Dừng lại và không tiếp tục xử lý nếu đăng nhập thất bại
    }

    // Nếu phản hồi không OK (không phải mã 200), ném lỗi
    if (!response.ok) {
      throw new Error(`Đăng nhập thất bại với mã trạng thái: ${response.status}`);
    }

    // Nhận chuỗi token từ phản hồi
    const token = await response.text();  // Sử dụng text() thay vì json() nếu server trả về chuỗi JWT

    // Kiểm tra nếu không có token trong phản hồi
    if (!token) {
      throw new Error('Không nhận được token từ máy chủ');
    }

    // Giải mã token để lấy thông tin vai trò (roles) và các thông tin khác
    const decodedToken = jwtDecode(token);  // Sử dụng jwtDecode để giải mã token
    console.log('Decoded Token:', decodedToken);  // In ra token đã giải mã để kiểm tra

    // Kiểm tra vai trò (roles) trong token
    const { roles, sub } = decodedToken;

    if (!roles || !roles.includes('ADMIN')) {
      console.log('Bạn không có quyền truy cập vào trang quản trị');
      return;  // Không có quyền ADMIN, dừng lại
    }

    // Lưu token và thông tin người dùng vào localStorage
    localStorage.setItem('authToken', token);  // Lưu token vào localStorage
    localStorage.setItem('sub', sub);        // Lưu tên tài khoản hoặc thông tin nào cần thiết từ token

    // Điều hướng tới trang quản trị nếu thành công
    navigate('/admin');

  } catch (error) {
    console.error('Lỗi trong quá trình đăng nhập:', error);
    // Có thể xử lý lỗi tại đây (ví dụ: hiển thị thông báo lỗi cho người dùng)
  }
};

export default login;
