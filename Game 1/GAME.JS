function loop(){
    // მოძრაობა
    let dx = 0, dy = 0;
    if(keys['w']) dy -= tank.speed;
    if(keys['s']) dy += tank.speed;
    if(keys['a']) dx -= tank.speed;
    if(keys['d']) dx += tank.speed;

    let dist = Math.hypot(dx, dy);
    if(dist > 0){
        dx = dx/dist * tank.speed;
        dy = dy/dist * tank.speed;

        let nx = tank.x + dx;
        let ny = tank.y + dy;

        if(!collideWall(nx, ny)){
            tank.x = nx;
            tank.y = ny;
        }

        // Hull მოძრაობის მიმართულებით
        tank.angHull = Math.atan2(dy, dx);
    }

    // Turret მიჰყვება მაუსს
    tank.angTurret = Math.atan2(mouse.y - tank.y, mouse.x - tank.x);

    // სროლა მაუსის მარცხენა ღილაკით
    if(mouse.down){
        shoot(tank, false);
    }

    // bullets განახლება
    bullets.forEach(b => {
        b.x += Math.cos(b.ang)*4;
        b.y += Math.sin(b.ang)*4;
    });

    // enemies განახლება და სროლა
    enemies.forEach(e => {
        e.angTurret = Math.atan2(tank.y - e.y, tank.x - e.x);
        e.angHull = e.angTurret;
        let ex = e.x + Math.cos(e.angHull)*e.speed;
        let ey = e.y + Math.sin(e.angHull)*e.speed;
        if(!collideWall(ex, ey)){ e.x = ex; e.y = ey; }
        if(Date.now() - e.lastShot > 5000 && Math.random() < 0.02) shoot(e, true);
    });

    // collisions bullets
    bullets.forEach((b,i) => {
        enemies.forEach((e,j) => {
            if(Math.hypot(b.x-e.x, b.y-e.y) < 15){
                e.hp -= b.power;
                bullets.splice(i,1);
                if(e.hp <= 0) enemies.splice(j,1);
            }
        });
    });

    enemyBullets.forEach((b,i) => {
        if(Math.hypot(b.x - tank.x, b.y - tank.y) < 15){
            tank.hp -= b.power;
            enemyBullets.splice(i,1);
            if(tank.hp <= 0) endBattle(false);
        }
    });

    // ტალღის მართვა
    if(enemies.length === 0){
        waveIndex++;
        if(waveIndex < waves.length) spawnWave();
        else endBattle(true);
    }

    // დახატვა
    ctx.clearRect(0,0,1200,800);
    mapObjects.forEach(o => {
        ctx.fillStyle = o.type == 'wall' ? '#555' : (o.type=='tree'?'#0a0':'#070');
        ctx.fillRect(o.x-10, o.y-10, 20, 20);
    });
    drawTank(tank.x, tank.y, tank.angHull, tank.angTurret, '#0c0');
    bullets.forEach(b => ctx.fillRect(b.x-2,b.y-2,4,4));
    enemyBullets.forEach(b => ctx.fillRect(b.x-2,b.y-2,4,4));
    enemies.forEach(e => drawTank(e.x,e.y,e.angHull,e.angTurret,'#f00'));

    ctx.fillStyle = '#fff';
    ctx.fillText('HP: '+tank.hp, 10, 20);
    ctx.fillText('Coins: '+coins, 10, 40);

    requestAnimationFrame(loop);
}
