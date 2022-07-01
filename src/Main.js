/**
 * Created by Rychou on 2018/4/19.
 */
import React, {Component} from 'react'
import $ from 'jquery'
import url from './audio/gbqq.mp3' // 引入背景音乐文件


class Main extends Component {
    state = {
        date: {},
    }

    componentDidMount() {
        this.print();
        setInterval(() => {
                this.time(2022, 4, 1)
            }, 1000
        )
        const audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 0)
    }

    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();

            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                } else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                }
                ;
                setTimeout(fn, 50)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({date: {d: d, hour: hour, minute: minute, second: second}});
    };

    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const {d, hour, minute, second} = this.state.date
                return (<p>Love Days: <span className="date-text">{d}</span> ngày, <span
                        className="date-text">{hour}</span> giờ, <span className="date-text">{minute}</span> phút, <span
                        className="date-text">{second}</span> giây </p>
                )
            }
        }

        return (
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div>
                <div id="autotype">
                    <p>Thuỷ mến thương!</p>
                    <p>
                        Vậy là mình đã yêu nhau đc 3 tháng. Hôm nay a muốn làm gì đó đặc biệt để gửi
                        đến e. vậy nên, a đã dành nguyên một ngày công của mình ra để ngồi làm cái này tặng e đóa 😅
                    </p>
                    <p>
                        Trong tất cả các loại thuỷ như: thuỷ điện, thuỷ đậu, thuỷ triều... a thích nhất là Thuỷ Phạm.
                        Sau đây a xin kể quá trình hình thành và phát triển tình cảm với Thuỷ Phạm. 💗💗💗
                    </p>
                    <p>
                        😮 Từ thích thích:
                        Lần đầu tiên gặp e, a bị thu hút bởi ánh mắt, giọng nói và nơi mà e sinh ra. Ai lại nghĩ được là
                        a có thể được quen 1 cô gái cách cả ngàn cây số chứ. Rồi khi mình đi chung xe và nói chuyện, a
                        cũng bị bất ngờ khi có cảm giác gần gũi văn hoá, hỏi ra thì biết đc e sống ở ngoài HN cũng lâu
                        rồi. Chs lúc đó cứ nghĩ là do e thất tình nến trốn ra tận ngoài này 🙃
                    </p>
                    <p>
                        😑 Thành thương thương:
                        Sau lần gặp đầu tiên đó là quá trình gây ấn tượng nè: nhắn tin fb, nhắn tin shopee, đi ăn đi
                        uống, sửa hộ mt... tỏ ra là ng hài hước lạc quan pha chút khó tính. Mỗi lần nt vs e là cứ cười
                        ko ngậm đc mồm thôi, vậy mà ng ấy ko chịu trả lời làm a nghĩ chắc faild rồi 😭
                        Rồi dịch bệnh xảy ra làm mọi chuyện cứ lùi lại dầnnnnnnn.
                    </p>
                    <p>
                        😍 Rồi yêu yêu:
                        Đoạn này thì chắc bắt đầu từ mqh cũ của a, e được thấy a trong 1 bộ dạng khác, yếu đuối hơn. Dù
                        sao mình đã có những cuộc nói chuyện thật lòng, mong e hiểu được những gì a nói và thấy được
                        những gì a làm.
                        A mong cả 2 cùng cố gắng tốt hơn để càng lâu thì mình càng nhận ra là mình đã yêu đúng người.
                    </p>
                    <p>*** Đoạn kết bài là thơ, cho a khất 😘 ***</p>
                    <div style={{textAlign: 'right'}}>
                        <p>Yêu em,</p>
                        <p>LongMinHo</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}

export default Main
