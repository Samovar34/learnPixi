// создаём рендер
var renderer = PIXI.autoDetectRenderer(256, 256, {
    antialias: false,
    transparent: false,
    resolution: 1
});

// добавим рендер в dom (canvas)
document.body.appendChild(renderer.view);
renderer.view.style.border = "1px solid #f00";
console.log("width: " + renderer.view.width + "px;\nheight: " + renderer.view.height + "px;");

// изменить размер канваса
renderer.autoResize = true;
renderer.resize(512, 512);

renderer.onresize = function () {
    console.log("width: " + renderer.view.width + "px;\nheight: " + renderer.view.height + "px;");
};

// var img = new Image(32, 32);
// img.src = "images/box.png";

// img.onload = run;

PIXI.loader
    .add("box", "/assets/box.png")
    .add("/assets/tileset.png")
    .on("progress", loadProgressHendler)
    .load(run);

function loadProgressHendler(loader, resource) {

    // показать url файла
    console.log("loading: " + resource.url);

    // если дано имя loader.add(name, uri)
    // resource.name => name

    // показать процент загруженных файлов
    console.log("progress: " + loader.progress + "%");
    console.log("loading...");
}

function run() {
    // создадим контейнер для отрисовки
    var stage = new PIXI.Container();

    var sprite = new PIXI.Sprite(PIXI.loader.resources["box"].texture);

    //var sprite = new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(img)));
    sprite.position.set(100, 100);

    sprite.anchor.set(0.5, 0.5);
    //sprite.pivot.set(32, 32);
    stage.addChild(sprite);

    //sprite.scale = 2;

    // отрисовка
    renderer.render(stage);

    setTimeout(function () {

        // удалить из контейнера
        //stage.removeChild(sprite);

        // не отображать спрайт (предпочтительнее)
        //sprite.visible = false;

        
        
        //sprite position
        sprite.x += 16;
        sprite.y += 16;
        sprite.rotation = .3;
        // sprite.position.set(x, y);

        // sprite.width = 32;
        // sprite.height = 64;

        // scale
        // sprite.scale.x = 0.5;
        // sprite.scale.y = 0.5;
        // sprite.scale.x = 2;
        // sprite.scale.y = 2;
        // sprite.scale.set(0.5, 0.5);

        // вращение (радианы)
        // sprite.rotation = value;

        // pivot и anchor очень похожи
        // разница в том что pivot в px, a anchor в %
        // якорь
        // sprite.anchor.x(y) = 0..1 (от 0 до 100%)

        // sprite.pivot.set(32, 32)
        
        renderer.render(stage);
    }, 2000);
}

