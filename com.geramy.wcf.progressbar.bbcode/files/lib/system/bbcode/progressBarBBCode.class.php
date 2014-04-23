<?php
namespace wcf\system\bbcode;
use wcf\system\WCF;
use wcf\system\exception\SystemException;

/**
 * Parses the progressBarBBCode bbcode tag.
 * 
 * @package	com.geramy.wcf.progressBarBBCode.bbcode
 * @copyright	geramy
 * @author	geramy (mit Hilfe von anderen BBcode Plugins aufgebaut)
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @category	WCF
 * @parameter
 */
class progressBarBBCode extends AbstractBBCode {
	/**
	 * @see	wcf\system\bbcode\IBBCode::getParsedTag()
	 */
	public function getParsedTag(array $openingTag, $content, array $closingTag, BBCodeParser $parser) {

//        throw new SystemException("<pre>".print_r($openingTag,true)."</pre>");

		//if ($parser->getOutputType() == 'text/html') {
            $vars=array();

			if(!isset($openingTag['attributes'][4])){
				$openingTag['attributes'][4]=0;
			}

            $vars["content"]=$content;
            if(strlen($content)!=0 && $openingTag['attributes'][4]!=1){
                $vars["content"].=": ";
            }


            //anzeige
            if(isset($openingTag['attributes'][0])){
                if($openingTag['attributes'][0]!=-1){
                    $vars["fill"]=$openingTag['attributes'][0];
                    if($openingTag['attributes'][4]!=1){
                        $vars["content"].=$openingTag['attributes'][0]."%";
                    }
                }
            }
            if(!isset($vars["fill"])){
                $vars["fill"]=0;
                if($openingTag['attributes'][4]!=1){
                    $vars["content"].="0%";
                }
            }

            //bgfarbe
            if(isset($openingTag['attributes'][1])){
                if($openingTag['attributes'][1]!=-1){
                    $vars["bgcolor"]=$openingTag['attributes'][1];
                }
            }
            if(!isset($vars["bgcolor"]))
                $vars["bgcolor"]='#D8E7F5';

            //farbe
            if(isset($openingTag['attributes'][2])){
                if($openingTag['attributes'][2]!=-1){
                    $vars["color"]=$openingTag['attributes'][2];
                }
            }
            if(!isset($vars["color"]))
                $vars["color"]='#254C73';

            $height=25;
            //breite
            if(isset($openingTag['attributes'][3])){
                if($openingTag['attributes'][3]!=-1){
                    $vars["width"]=$openingTag['attributes'][3]."%";
                    //$height=$height/100*$openingTag['attributes'][3];
                }
            }
            if(!isset($vars["width"]))
                $vars["width"]='100%';

            $vars["height"]=$height;

            $vars["id"]=rand(1000000,9999999);

			WCF::getTPL()->assign($vars);
			return WCF::getTPL()->fetch('progressBarBBCodeTag');
	//	}
	}
}
