//=============================================================================
// VehicleSpeed.js
//=============================================================================

/*:
 * @plugindesc 乗り物の初期移動速度を変えるよ。
 * @author ゆわか
 *
 * @param BoatSpeed
 * @desc ボートの速度(例: 4=通常 5=2倍速)
 * @default 4
 *
 * @param ShipSpeed
 * @desc 帆船の速度(例: 4=通常 5=2倍速)
 * @default 5
 *
 * @param AirshipSpeed
 * @desc 飛行船の速度(例: 4=通常 5=2倍速)
 * @default 6
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 *　乗り物の移動速度の初期値を変更できます。
 *　ゲームの途中では変更できませんのでご注意ください。
 *
 * ＲＰＧツクールＭＶ専用のプラグインです。
 * 使用報告不要・クレジット不要・改変可・商用利用可
 * もし何か問題が起きても、当方は一切責任を負いません。ご了承ください。
 */

(function() {
  var parameters = PluginManager.parameters('VehicleSpeed');
  var BoatSpeed = Number(parameters['BoatSpeed'] || 4);
  var ShipSpeed = Number(parameters['ShipSpeed'] || 5);
  var AirshipSpeed = Number(parameters['AirshipSpeed'] || 6);

//rpg_objects.jsより。乗り物の移動速度を指定。
Game_Vehicle.prototype.initMoveSpeed = function() {
    if (this.isBoat()) {
        this.setMoveSpeed(BoatSpeed);
    } else if (this.isShip()) {
        this.setMoveSpeed(ShipSpeed);
    } else if (this.isAirship()) {
        this.setMoveSpeed(AirshipSpeed);
    }
};
})();
