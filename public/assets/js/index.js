$(function() {
    Wstoast.config({autoClose:true,showClose:true,html:true})
const fonts = ['1Row', '3-D', '3D Diagonal', '3D-ASCII', '3x5', '4Max', '5 Line Oblique', 'Acrobatic', 'Alligator', 'Alligator2', 'Alpha', 'Alphabet', 'AMC 3 Line', 'AMC 3 Liv1', 'AMC AAA01', 'AMC Neko', 'AMC Razor', 'AMC Razor2', 'AMC Slash', 'AMC Slider', 'AMC Thin', 'AMC Tubes', 'AMC Untitled', 'ANSI Regular', 'ANSI Shadow', 'Arrows', 'ASCII New Roman', 'Avatar', 'B1FF', 'Banner', 'Banner3', 'Banner3-D', 'Banner4', 'Barbwire', 'Basic', 'Bear', 'Bell', 'Benjamin', 'Big Chief', 'Big Money-ne', 'Big Money-nw', 'Big Money-se', 'Big Money-sw', 'Big', 'Bigfig', 'Binary', 'Block', 'Blocks', 'Bloody', 'Bolger', 'Braced', 'Bright', 'Broadway KB', 'Broadway', 'Bubble', 'Bulbhead', 'Caligraphy', 'Caligraphy2', 'Calvin S', 'Cards', 'Catwalk', 'Chiseled', 'Chunky', 'Coinstak', 'Cola', 'Colossal', 'Computer', 'Contessa', 'Contrast', 'Cosmike', 'Crawford', 'Crawford2', 'Crazy', 'Cricket', 'Cursive', 'Cyberlarge', 'Cybermedium', 'Cybersmall', 'Cygnet', 'DANC4', 'Dancing Font', 'Decimal', 'Def Leppard', 'Delta Corps Priest 1', 'Diamond', 'Diet Cola', 'Digital', 'Doh', 'Doom', 'DOS Rebel', 'Dot Matrix', 'Double Shorts', 'Double', 'Dr Pepper', 'DWhistled', 'Efti Chess', 'Efti Font', 'Efti Italic', 'Efti Piti', 'Efti Robot', 'Efti Wall', 'Efti Water', 'Electronic', 'Elite', 'Epic', 'Fender', 'Filter', 'Fire Font-k', 'Fire Font-s', 'Flipped', 'Flower Power', 'Four Tops', 'Fraktur', 'Fun Face', 'Fun Faces', 'Fuzzy', 'Georgi16', 'Georgia11', 'Ghost', 'Ghoulish', 'Glenyn', 'Goofy', 'Gothic', 'Graceful', 'Gradient', 'Graffiti', 'Greek', 'Heart Left', 'Heart Right', 'Henry 3D', 'Hex', 'Hieroglyphs', 'Hollywood', 'Horizontal Left', 'Horizontal Right', 'ICL-1900', 'Impossible', 'Invita', 'Isometric1', 'Isometric2', 'Isometric3', 'Isometric4', 'Italic', 'Ivrit', 'Jacky', 'Jazmine', 'Jerusalem', 'JS Block Letters', 'JS Bracket Letters', 'JS Capital Curves', 'JS Cursive', 'JS Stick Letters', 'Katakana', 'Kban', 'Keyboard', 'Knob', 'Konto Slant', 'Konto', 'Larry 3D 2', 'Larry 3D', 'LCD', 'Lean', 'Letters', 'Lil Devil', 'Line Blocks', 'Linux', 'Lockergnome', 'Madrid', 'Marquee', 'Maxfour', 'Merlin1', 'Merlin2', 'Mike', 'Mini', 'Mirror', 'Mnemonic', 'Modular', 'Morse', 'Morse2', 'Moscow', 'Mshebrew210', 'Muzzle', 'Nancyj', 'Nancyj-Fancy', 'Nancyj-Improved', 'Nancyj-Underlined', 'Nipples', 'NScript', 'NT Greek', 'NV Script', 'O8', 'Octal', 'Ogre', 'Old Banner', 'OS2', 'Pagga', 'Patorjk\'s Cheese', 'Patorjk-HeX', 'Pawp', 'Peaks Slant', 'Peaks', 'Pebbles', 'Pepper', 'Poison', 'Puffy', 'Puzzle', 'Pyramid', 'Rammstein', 'Rectangles', 'Red Phoenix', 'Relief', 'Relief2', 'Reverse', 'Roman', 'Rot13', 'Rotated', 'Rounded', 'Rowan Cap', 'Rozzo', 'Runic', 'Runyc', 'S Blood', 'Santa Clara', 'Script', 'Serifcap', 'Shadow', 'Shimrod', 'Short', 'SL Script', 'Slant Relief', 'Slant', 'Slide', 'Small Caps', 'Small Isometric1', 'Small Keyboard', 'Small Poison', 'Small Script', 'Small Shadow', 'Small Slant', 'Small Tengwar', 'Small', 'Soft', 'Speed', 'Spliff', 'Stacey', 'Stampate', 'Stampatello', 'Standard', 'Star Strips', 'Star Wars', 'Stellar', 'Stforek', 'Stick Letters', 'Stop', 'Straight', 'Stronger Than All', 'Sub-Zero', 'Swamp Land', 'Swan', 'Sweet', 'Tanja', 'Tengwar', 'Term', 'Test1', 'The Edge', 'Thick', 'Thin', 'THIS', 'Thorned', 'Three Point', 'Ticks Slant', 'Ticks', 'Tiles', 'Tinker-Toy', 'Tombstone', 'Train', 'Trek', 'Tsalagi', 'Tubular', 'Twisted', 'Two Point', 'Univers', 'USA Flag', 'Varsity', 'Wavy', 'Weird', 'Wet Letter', 'Whimsy', 'Wow',]
figlet.defaults({fontPath: 'https://unpkg.com/figlet@1.5.2/fonts'});
var vm = new Vue({
    el: '#app',
    data: {
        set: {
            input: 'ThanhDieu',
            output: '',
            font: 'Ogre',
            horizontalLayout: 'default',
            width: undefined,
        },
        fonts
    },
    watch: {
        'set.input'() {
            this.generate()
        },
        'set.font'(newVal) {
            if (newVal !== 'all') {
                figlet.loadFont(newVal, () => {
                });
            }
        }
    },
    created() {
        this.generate()
    },
    methods: {
        generate() {
            let that = this
            try {
                let tasks = []
                if (this.set.font === 'all') {
                    tasks = this.fonts
                } else {
                    tasks.push(this.set.font)
                }
                that.set.output = '';
                for (const k in tasks) {
                    figlet.text(this.set.input, {
                        font: tasks[k],
                        horizontalLayout: this.set.horizontalLayout,
                        verticalLayout: 'default',
                        width: this.set.width,
                        whitespaceBreak: true
                    }, function (err, text) {
                        if (err) {
                            throw err
                        }
                        Wstoast.success('Đã tạo chữ nghệ thuật ASCII')
                        that.set.output += text;
                    });
                }

            } catch (e) {
                Wstoast.error(e.message)
            }
        },
        reset() {
            this.set.input = ''
            this.set.output = ''
            Wstoast.success('Đã làm trống nội dung & kết quả')
        },
    },
})
});