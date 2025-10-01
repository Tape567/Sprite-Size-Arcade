//% blockNamespace="SpriteGrowth" color="#4C97FF" icon="\uf1b2"
//% weight=100
namespace spriteSize {
//% block="scale %sprite(mySprite) by %factor"
    /**
     * Grows the sprite by a certain number of pixels in width and height.
     * @param sprite the sprite to grow
     * @param byPixels number of pixels to grow, eg: 4
     */
    //% blockId="grow_sprite"
    //% block="grow %sprite(mySprite) by %byPixels px"
    //% byPixels.min=1 byPixels.max=64
    //% group="Size"
    export function grow(sprite: Sprite, byPixels: number): void {
        let img = sprite.image.clone();
        let w = img.width + byPixels;
        let h = img.height + byPixels;
        if (w < 1) w = 1;
        if (h < 1) h = 1;
        let newImg = image.create(w, h);
        newImg.drawImage(img, byPixels >> 1, byPixels >> 1);
        sprite.setImage(newImg);
    }

    /**
     * Shrinks the sprite by a certain number of pixels in width and height.
     * @param sprite the sprite to shrink
     * @param byPixels number of pixels to shrink, eg: 4
     */
    //% blockId="shrink_sprite"
    //% block="shrink %sprite(mySprite) by %byPixels px"
    //% byPixels.min=1 byPixels.max=64
    //% group="Size"
    export function shrink(sprite: Sprite, byPixels: number): void {
        let img = sprite.image.clone();
        let w = Math.max(1, img.width - byPixels);
        let h = Math.max(1, img.height - byPixels);
        let newImg = image.create(w, h);
        newImg.drawImage(img, -(byPixels >> 1), -(byPixels >> 1));
        sprite.setImage(newImg);
    }
}
