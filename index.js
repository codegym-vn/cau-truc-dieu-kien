let age = document.getElementById("age");
let zodiac = document.getElementById("zodiac");
let personality = document.getElementById("personality");

const check = () => {
  let day = parseInt(document.getElementById("date_of_birth").value);
  let month = parseInt(document.getElementById("month_of_birth").value);
  let year = parseInt(document.getElementById("year_of_birth").value);

  let age_value;
  let zodiac_value;
  let personality_value;

  if (day < 1 || day > 31) {
    alert("Ngay sinh khong hop le");
    return;
  };

  if (month < 1 || month > 12) {
    alert("Thang sinh khong hop le");
    return;
  }
  
  if (year){
    age_value = new Date().getFullYear() - year;
    age.innerText = "Tuoi: " + age_value;
  } else {
    age.innerText = "";
  }

  switch (month) {
    case 1:
      if (day <= 19) {
        zodiac_value = "Ma Ket";
        personality_value = "Nguời tuổi này đặt nặng vấn đề danh vọng, đia vị xã hội lên trên hết. Họ thường hay lợi dụng những cuộc giao tế để nâng cao địa vị xã hội của họ lên. Họ nghĩ rằng nếu mở rộng sự giao thiệp sẽ đem lại cho họ nhiều lợi nhuận và quyền thế. Vì vậy họ thích hợp với đời sống cộng đồng hơn là một mái gia đình đơn thuần. Người tuổi này không thành công mau chóng, tuy vậy chậm mà chắc. Họ cũng trung thành, tự tin, bảo thủ, hay nghi ngờ, đề phòng. Có óc tổ chức, tinh khôn sắc xảo, đơn giản. Thích hoạt động cho cộng đồng, tập đoàn nhiều hơn. Về tình yêu, họ cũng khá chung tình. Họ sắp xếp, tính toán, cân nhắc lợi hại rất kỹ trước khi đến với đối tượng của họ. Do đó, nếu có đổ vỡ thì kẻ dứt áo ra đi không phải là họ mà là đối tượng của họ."
      } else {
        zodiac_value = "Bao Binh";
        personality_value = "Người tuổi này thường tỏ ra năng động, xây dựng những gì cần thiết cho bản thân và gia đình của họ. Họ thích sự công bằng và đánh gía sự công bằng ấy qua hành động của những người chung quanh. Họ rất chân thật, thủy chung, có lòng vị tha, nhiều sáng kiến và nổi bật xuất sắc khi họ còn trẻ tuổi. Tuy nhiên đôi khi họ tỏ ra ngang bướng, bảo thủ, và lại ngang bướng. Bản chất của họ rất khó xác định, vì họ thường hay thay đổi khi hấp thụ những tư tưởng mới. Về tình yêu, người Bảo bình rất nhạy cảm và lãng mạn. Tình yêu đóng vai trò rất quan trọng đối với họ vì nó là nguồn cảm hứng lớn lao cho họ. Vì lý tưởng hóa, nếu thấy đối tượng không hợp, họ sẵn sàng từ bỏ đi tìm tình yêu lý tưởng khác rất mau lẹ. Thường thì từ tháng 4 đến tháng 7 họ hay có những nhạy cảm về tình cảm."
      }
      break;
    case 2:
      if (day <= 19) {
        zodiac_value = "Bao Binh";
        personality_value = "Người tuổi này thường tỏ ra năng động, xây dựng những gì cần thiết cho bản thân và gia đình của họ. Họ thích sự công bằng và đánh gía sự công bằng ấy qua hành động của những người chung quanh. Họ rất chân thật, thủy chung, có lòng vị tha, nhiều sáng kiến và nổi bật xuất sắc khi họ còn trẻ tuổi. Tuy nhiên đôi khi họ tỏ ra ngang bướng, bảo thủ, và lại ngang bướng. Bản chất của họ rất khó xác định, vì họ thường hay thay đổi khi hấp thụ những tư tưởng mới. Về tình yêu, người Bảo bình rất nhạy cảm và lãng mạn. Tình yêu đóng vai trò rất quan trọng đối với họ vì nó là nguồn cảm hứng lớn lao cho họ. Vì lý tưởng hóa, nếu thấy đối tượng không hợp, họ sẵn sàng từ bỏ đi tìm tình yêu lý tưởng khác rất mau lẹ. Thường thì từ tháng 4 đến tháng 7 họ hay có những nhạy cảm về tình cảm."
      } else {
        zodiac_value = "Song Ngu";
        personality_value = "Người tuổi Song ngư rất quảng đại, dễ mến, mềm mỏng và bao dung, họ có một lòng từ ái bao la, họ thường hay quên mình và để hy sinh cho người khác; đôi khi họ nhận chịu những thiệt thòi để đổi lấy sự an bình nơi người chung quanh. Họ là người có nhiều cao vọng và thường muốn thoát ra những ràng buộc chung quanh. Người tuổi này là mẫu người có nhiều mơ mộng, nhạy cảm, và hay lưỡng lự trước khi quyết định. Ðó là do họ để cảm tình lôi kéo họ hơn là nhờ vào những suy luận của lý trí. Chính vì thế, nên người tuổi này phải coi chừng đề phòng những trường hợp bị lợi dụng bởi người khác. Tuy nhiên, họ có tài ăn nói bén nhạy, và có tài hòa giải những bất đồng một cách tốt đẹp. Phần đông những người tuổi này thường thích làm nghề tự do, và không thích những chức vụ chỉ huy lâu dài. Vì thông minh thiên phú và có khả năng học hỏi mau chóng, họ thích hợp với các nghề như y, dược, giáo dục, kỹ sư. Về tình cảm, tình yêu là căn bản thực sự của người tuổi Song ngư, giúp họ tìm lại được bản chất cao quý của họ. Tình cảm của họ thật sâu đậm, chân thật, nhưng thường che dấu, nên dễ bị hiểu lầm là hờ hững lạnh nhạt. Họ thích đuổi theo hạnh phúc và dễ bị tình yêu dẫn dắt. Họ rất mơ mộng và chinh phục tình yêu bằng sự chân thành của họ. Ðiều này khiến cho đối tượng của họ rất hài lòng."
      }
      break;
  }

  zodiac.innerText = "Cung hoang dao: " + zodiac_value;
  personality.innerText = "Tinh cach: " + personality_value;
}