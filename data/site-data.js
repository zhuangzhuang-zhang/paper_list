window.PAPERS_SITE_DATA = {
  "generatedAt": "2026-06-03T13:25:39.586214+00:00",
  "description": "按北京时间每天 08:00 的固定批次归档，展示上一批次 24 小时内新发布的高相关论文。",
  "dateWindowDays": 1,
  "categories": [
    "cs.RO",
    "cs.AI",
    "cs.CV",
    "cs.LG"
  ],
  "keywords": [
    "vision-language-action",
    "world action model",
    "robotics",
    "autonomous driving"
  ],
  "selectionMethod": "deepseek_rerank",
  "modelInfo": {
    "provider": "deepseek",
    "model": "deepseek-v4-pro",
    "candidateCount": 17
  },
  "batchWindow": {
    "start": "2026-06-02T08:00:00+08:00",
    "end": "2026-06-03T08:00:00+08:00"
  },
  "currentDateKey": "20260603",
  "papers": [
    {
      "id": "2606.03784v1",
      "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
      "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale.",
      "summaryRaw": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data. Through extensive experiments, we find that effective embodied CoT should ground high-level semantic understanding into concrete action guidance, such as end-effector movement descriptions and image-space trajectories, while high-level reasoning alone brings only marginal gains. We further show that explicit CoT does not scale reliably when used as an autoregressive action prefix, as it suffers from compounding inference errors and unstable reasoning-action coupling. To address these limitations, we propose ERVLA, a VLA model that uses embodied CoT as representation-shaping supervision rather than mandatory test-time reasoning. ERVLA is trained with a reasoning-dropout strategy, enabling the model to absorb rich reasoning traces during training while predicting actions directly without CoT decoding during inference. This design improves scalability with increasing pre-training data and avoids autoregressive instability. ERVLA achieves state-of-the-art performance on LIBERO-Plus with an 86.9% success rate and reaches 53.2% success rate on VLABench, demonstrating strong out-of-distribution generalization. In real-robot experiments, ERVLA further outperforms competitive state-of-the-art baselines, especially on tasks requiring semantic disambiguation and long-horizon execution. Code, data, and model checkpoints will be released.",
      "link": "https://arxiv.org/abs/2606.03784v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03784v1",
      "published": "2026-06-02T15:37:59Z",
      "updated": "2026-06-02T15:37:59Z",
      "authors": [
        "Nan Sun",
        "Yuan Zhang",
        "Yongkun Yang",
        "Wentao Zhao",
        "Peiyan Li",
        "Jun Guo",
        "Wenxuan Song",
        "Pengxiang Ding"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 95,
      "importanceLevel": "S",
      "oneSentenceSummary": "提出ERVLA：用推理dropout训练，无需测试时推理即可实现SOTA机器人操控。",
      "summaryCn": "本文重新审视具身CoT在VLA模型中的有效性，构建最大具身CoT语料库，发现仅高级推理增益有限，而具体的末端执行器运动描述和图像空间轨迹更有效。提出ERVLA，将CoT作为表示塑造监督而非强制测试时推理，引入推理dropout策略，使模型在训练时吸收丰富推理轨迹，推理时直接预测动作，避免自回归不稳定性。在LIBERO-Plus和VLABench上达到SOTA，真实机器人实验中在语义消歧和长时域任务上表现出色。",
      "whyImportant": "首次大规模证明具身CoT的最佳形式，并提出无需推理时解码的高效VLA训练范式，推动机器人基础模型发展。",
      "reasonTags": [
        "VLA模型",
        "具身CoT",
        "机器人操控",
        "新训练范式"
      ],
      "innovationPoints": [
        "构建大规模具身CoT数据集，揭示具体动作指导优于高级推理",
        "提出推理dropout训练策略，将CoT作为表示学习监督，推理时直接动作解码",
        "在多个基准和真实机器人上验证泛化性和稳定性，超越自回归CoT方法"
      ]
    },
    {
      "id": "2606.03392v1",
      "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
      "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA).",
      "summaryRaw": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy. OpenEAI-VLA builds on Qwen3-VL-4B and uses a Diffusion Transformer action head, and is trained in two stages with only open-source robot and multimodal datasets. Across four real-world manipulation tasks, OpenEAI-Arm outperforms two commercial 6+1-dof arms under the same policy, and OpenEAI-VLA achieves success rates comparable to the large-scale pretrained pi0 baseline with only limited pretraining data. We will release the full hardware designs, drivers, models, and training/data pipelines to support reproducible research and scalable data collection. Our codes, layouts, and models will be released after the paper is accepted.",
      "link": "https://arxiv.org/abs/2606.03392v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03392v1",
      "published": "2026-06-02T09:34:08Z",
      "updated": "2026-06-02T09:34:08Z",
      "authors": [
        "Jinyuan Zhang",
        "Luoyi Fan",
        "Leiyu Wang",
        "Yeqiang Wang",
        "Yicheng Zhu",
        "Cewu Lu",
        "Nanyang Ye"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 90,
      "importanceLevel": "S",
      "oneSentenceSummary": "OpenEAI平台：全开源低成本机器臂与VLA模型，实现可复现的具身研究。",
      "summaryCn": "提出OpenEAI-Platform，包括开源6+1自由度机械臂硬件和基于Qwen3-VL-4B的VLA模型。机械臂采用低制造成本设计和高顺位控制，VLA模型使用Diffusion Transformer动作头，仅用开源数据两阶段训练。在四个真实操作任务中，机械臂性能超越两款商用臂，VLA模型成功率媲美大规模预训练基线pi0。平台将全开源硬件设计、驱动、模型及训练流程，促进可复现研究和规模化数据收集。",
      "whyImportant": "提供首个完整的开源硬件-软件具身平台，低成本可复现，推动社区标准化与规模化研究。",
      "reasonTags": [
        "开源平台",
        "VLA模型",
        "机器人硬件",
        "可复现性"
      ],
      "innovationPoints": [
        "开源高性价比机械臂设计，结合高精度顺位控制",
        "基于扩散Transformer的VLA，仅用开源数据达到与大规模预训练模型可比性能",
        "全栈开源：硬件、模型、数据管线，支持社区快速迭代"
      ]
    },
    {
      "id": "2606.03127v1",
      "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
      "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guida…",
      "summaryRaw": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from interaction? We address this question with TTT-VLA, a test-time training framework based on Latent Prompt Optimization (LPO). During training, the latent prompt is learned with an additional proxy task, providing an extra learned conditioning signal for policy learning. At test time, TTT is performed by collecting interaction data from the current environment and optimizing only the latent prompt on those data using the proxy task's self-supervised signal, without modifying the policy itself. Experiments on SimplerEnv demonstrate that the proposed method consistently improves task success rates in both single- and multi-embodiment settings. Further analysis shows that the gains arise primarily from correcting a small number of critical decisions rather than globally altering policy behavior. These results suggest that LPO provides an effective and practical pathway for deployment-time improvement of foundation manipulation policies.",
      "link": "https://arxiv.org/abs/2606.03127v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03127v1",
      "published": "2026-06-02T04:10:39Z",
      "updated": "2026-06-02T04:10:39Z",
      "authors": [
        "Wenbo Zhang",
        "Jianxiong Li",
        "Shuai Yang",
        "Sijin Chen",
        "Jiajun Liu",
        "Lingqiao Liu",
        "Xiao Ma"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 85,
      "importanceLevel": "A",
      "oneSentenceSummary": "TTT-VLA：通过测试时优化潜在提示，无需改动模型即可提升策略鲁棒性。",
      "summaryCn": "针对VLA模型部署时的分布偏移问题，提出TTT-VLA框架。训练时学习潜在提示作为额外条件信号，测试时利用代理任务的自监督信号优化该潜在提示，无需修改策略网络。在SimplerEnv上的实验表明，该方法在单具身和多具身设置下均持续提升任务成功率，且主要纠正少数关键决策而非全局改变行为，为部署时策略改进提供了有效且实用的途径。",
      "whyImportant": "将测试时训练思想引入VLA，仅优化潜在提示即可适应新环境，轻量且通用，提升基础策略的可靠性。",
      "reasonTags": [
        "测试时训练",
        "VLA模型",
        "分布偏移",
        "策略自适应"
      ],
      "innovationPoints": [
        "提出基于潜在提示优化的测试时训练框架，适配VLA模型",
        "仅用少量交互数据优化提示，不修改原策略，实现高效部署适应",
        "实验证明主要修正关键决策，保持行为整体一致性"
      ]
    },
    {
      "id": "2606.03188v1",
      "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
      "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision.",
      "summaryRaw": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time. Nevertheless, existing WAMs mainly rely on RGB-based future prediction, which provides limited structural and spatial understanding of complex environments. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision. Alongside future RGB prediction, our model introduces two auxiliary prediction branches for future geometry and semantic representations, enabling it to jointly capture scene dynamics, spatial geometry, and semantic context within a unified latent space. Crucially, our approach preserves efficient inference by avoiding explicit future rollout or video generation at test time. Extensive experiments show that incorporating structured world supervision consistently improves action prediction accuracy, scene understanding, and robustness under challenging embodied scenarios, highlighting its potential for advancing scalable and efficient WAMs.",
      "link": "https://arxiv.org/abs/2606.03188v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03188v1",
      "published": "2026-06-02T05:48:02Z",
      "updated": "2026-06-02T05:48:02Z",
      "authors": [
        "Fulong Ma",
        "Daojie Peng",
        "Wenjun Yue",
        "Jiahang Cao",
        "Bintao Wang",
        "Qiang Zhang",
        "Jun Ma"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 83,
      "importanceLevel": "A",
      "oneSentenceSummary": "GeoSem-WAM：融合几何与语义监督的世界动作模型，提升表示学习。",
      "summaryCn": "针对现有世界动作模型依赖RGB预测且缺乏结构化理解的问题，提出GeoSem-WAM。在预测未来RGB帧的同时，引入未来几何和语义表示的辅助预测分支，联合捕捉场景动态、空间几何与语义上下文。该方法在训练时增强潜在表示，测试时不需显式未来生成，保持高效推理。实验证明结构化世界监督持续提升动作预测精度、场景理解和鲁棒性，为规模化、高效率的WAM提供新方向。",
      "whyImportant": "揭示WAM的关键在于表示学习而非生成，通过多模态监督增强结构化理解，推进高效世界模型设计。",
      "reasonTags": [
        "世界动作模型",
        "几何语义监督",
        "表示学习",
        "具身决策"
      ],
      "innovationPoints": [
        "点明世界动作模型的优势源于表示学习，而非显式未来生成",
        "多分支预测未来几何与语义，构建结构化潜在空间",
        "保持推理高效性，避免推理时视频生成，便于实际部署"
      ]
    },
    {
      "id": "2606.03943v1",
      "title": "PointAction: 3D Points as Universal Action Representations for Robot Control",
      "summary": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling.",
      "summaryRaw": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified, making action grounding ambiguous. Meanwhile, scaling action supervision across diverse tasks and embodiments remains costly. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling. PointAction fine-tunes a foundation video generation model to jointly predict future RGB frames and dynamic 3D pointmaps, producing temporally consistent 3D motion of task-relevant scene geometry. These point dynamics serve as a structured, embodiment-agnostic action interface, which a diffusion-based action decoder maps to executable robot actions. By using metric 3D point dynamics as the interface between video prediction and control, PointAction reduces the ambiguity of RGB-only action grounding and supports transfer across tasks and embodiments with limited action supervision. Experiments show that PointAction achieves state-of-the-art 4D generation quality on robot scenes, outperforms existing baselines in simulation, and generalizes to two real robot arms unseen during pretraining.",
      "link": "https://arxiv.org/abs/2606.03943v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03943v1",
      "published": "2026-06-02T17:30:50Z",
      "updated": "2026-06-02T17:30:50Z",
      "authors": [
        "Mutian Tong",
        "Han Jiang",
        "Qiao Feng",
        "Lingjie Liu",
        "Jiatao Gu"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 82,
      "importanceLevel": "A",
      "oneSentenceSummary": "PointAction：用3D点图作为通用动作表示，桥接视频预测与机器人控制。",
      "summaryCn": "针对现有视频动作模型RGB输出无法直接执行动作的问题，提出PointAction框架。微调基础视频生成模型，同时预测未来RGB帧和动态3D点图，产生时序一致的场景几何运动。这些点动力学作为结构化的、具身无关的动作接口，再由扩散动作解码器映射为机器人动作。实验表明，该方法在机器人场景4D生成质量上达到SOTA，在仿真和两个真实机械臂上泛化良好，减少了对大量动作监督的需求。",
      "whyImportant": "首次以3D点动力学作为视频预测与控制之间的通用接口，降低动作接地歧义，促进跨具身泛化。",
      "reasonTags": [
        "视频动作模型",
        "3D点图",
        "动作表示",
        "跨具身"
      ],
      "innovationPoints": [
        "提出用动态3D点图作为视频与动作间的结构化桥梁",
        "联合预测RGB与点图，保持时序一致性，减少动作监督需求",
        "扩散解码器实现点动力学到机器人动作的映射，支持多具身"
      ]
    },
    {
      "id": "2606.03609v1",
      "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
      "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. The representation is lightweight, interpretable, and reproducible, offering a geometric substrate for spatial reasoning in embodied AI, robotics, and urban analysis, released with an open dataset and pipeline.",
      "summaryRaw": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through. Those that do target geometry, such as bird's-eye-view occupancy grids, flatten the three-dimensional environment onto a ground plane, discarding the above-ground and multi-level structure that shapes real navigation. What is missing is a predictive target that captures the navigable geometry an agent actually traverses, without photometric entanglement and without collapsing the third dimension. Our key idea is to model the open volume between buildings, the negative space, encoded as a 3D isovist: a spherical visibility-depth map recording the distance to the nearest surface in every direction. We introduce an embodied world model that predicts the next isovist from a short history of past isovists and a movement action. The prediction is formulated as a depth residual so the decoder inherits sharp building edges, trained with self-rollout scheduled sampling to keep corrupted context on the geometry manifold, and equipped with a persistent latent bird's-eye-view spatial map for cross-path consistency. Our central finding is emergent and unexpected: a single city-blind model trained on Manhattan and Paris develops a cross-city spatial signature, with city identity linearly decodable from its temporal latents far above single-frame baselines, so the signature lives in the learned dynamics rather than in appearance. The representation is lightweight, interpretable, and reproducible, offering a geometric substrate for spatial reasoning in embodied AI, robotics, and urban analysis, released with an open dataset and pipeline.",
      "link": "https://arxiv.org/abs/2606.03609v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03609v1",
      "published": "2026-06-02T13:11:30Z",
      "updated": "2026-06-02T13:11:30Z",
      "authors": [
        "Xuhui Lin",
        "Stephen Law",
        "Nanjiang Chen",
        "Kunyao Li",
        "Tao Yang"
      ],
      "categories": [
        "cs.RO",
        "cs.LG"
      ],
      "score": 78,
      "importanceLevel": "A",
      "oneSentenceSummary": "3D等视域世界模型：预测导航空间几何，发现跨城市动态签名。",
      "summaryCn": "提出一种无外观纠缠的几何世界模型，以3D等视域（球面可见距离图）作为预测目标，避免传统世界模型对RGB的依赖。模型根据历史等视域和运动预测下一视域，采用深度残差和自展采样训练，并引入持久BEV隐图。意外发现：在曼哈顿和巴黎训练的单一模型，其时间隐变量可线性解码城市身份，说明签名存于学习动态而非外观。表示轻量可解释，为具身AI、机器人及城市分析提供几何推理基底，附带开源数据。",
      "whyImportant": "以纯几何方式建模可导航空间，为导航世界模型提供新思路，且发现城市间的动态签名，具启发性。",
      "reasonTags": [
        "世界模型",
        "等视域",
        "几何推理",
        "导航"
      ],
      "innovationPoints": [
        "以3D等视域作为预测目标，分离外观干扰，聚焦可导航几何",
        "自展训练与持久BEV隐图保证跨路径一致性",
        "发现模型动力学中蕴含城市身份信息，揭示空间签名"
      ]
    },
    {
      "id": "2606.03682v1",
      "title": "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation",
      "summary": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Overall, GN-Matrix offers a unified framework spanning data, simulation, and learning, advancing embodied navigation in research and industrial applications.",
      "summaryRaw": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities. To address this, we curate diverse 3D scenes and develop an automated pipeline for large-scale navigation data, resulting in the GN-Matrix dataset. Building on a 3D Gaussian Splatting (3DGS) engine, we introduce a high-fidelity simulation platform supporting interactive roaming and collision-aware navigation. We further propose GN-Bench, the first BEV-based benchmark incorporating dynamic 3DGS avatars for human-robot interaction evaluation. To leverage the simulator, we develop an RL-driven navigation foundation model, Break and Establish (BAE). After supervised learning, DAgger exposes the model to rollout-induced states, breaking narrow expert-centric distributions and enabling downstream RL exploration. This unified VLN paradigm integrates map-based and map-free tasks, including instruction following, human following, and goal navigation. GN-BAE formalizes high-fidelity 3DGS-rendered Bird's Eye View representations as compact memory, unlocking latent spatial reasoning in VLMs. Extensive evaluations on GN-Bench and VLN-CE show that GN0 outperforms state-of-the-art VLN methods. Overall, GN-Matrix offers a unified framework spanning data, simulation, and learning, advancing embodied navigation in research and industrial applications.",
      "link": "https://arxiv.org/abs/2606.03682v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03682v1",
      "published": "2026-06-02T14:05:47Z",
      "updated": "2026-06-02T14:05:47Z",
      "authors": [
        "Xinhai Li",
        "Xiaotao Zhang",
        "Yuehao Huang",
        "Jiankun Dong",
        "Tianhang Wang",
        "Sunyao Zhou",
        "Yunzi Wu",
        "Chengnuo Sun"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 72,
      "importanceLevel": "B",
      "oneSentenceSummary": "GN0统一范式：集成生成、评估与策略学习的视觉语言导航。",
      "summaryCn": "为解决视觉语言导航数据稀缺和泛化问题，构建大规模数据集GN-Matrix和基于3D高斯泼溅的高保真仿真平台，支持交互漫游与碰撞感知导航。提出BEV基准GN-Bench评估人机交互。开发RL驱动的导航基础模型BAE，结合监督学习和DAgger打破专家分布，使VLM通过BEV表示解锁空间推理。GN0在GN-Bench和VLN-CE上超越现有方法，形成数据、仿真与学习统一框架。",
      "whyImportant": "首次提出BEV导航基准并融合3DGS仿真，统一多任务导航范式，推动导航通用模型发展。",
      "reasonTags": [
        "视觉语言导航",
        "3DGS仿真",
        "BEV基准",
        "统一范式"
      ],
      "innovationPoints": [
        "构建大规模3DGS导航仿真器和BEV交互基准",
        "BAE模型通过DAgger和RL打破专家数据分布",
        "用BEV紧凑记忆激活VLM的空间推理能力"
      ]
    },
    {
      "id": "2606.03509v1",
      "title": "EvoMemNav: Efficient Self-Evolving Fine-Grained Memory for Zero-Shot Embodied Navigation",
      "summary": "Building memory is essential for long-horizon planning in zero-shot embodied navigation. We present EvoMemNav, an efficient, self-evolving, fine-grained memory framework for zero-shot embodied navigation.",
      "summaryRaw": "Building memory is essential for long-horizon planning in zero-shot embodied navigation. Detector-centric scene graphs often compress observations into sparse nodes, discarding fine-grained visual evidence and accumulating noise, while 3D reconstruction-based methods remain computationally prohibitive. We present EvoMemNav, an efficient, self-evolving, fine-grained memory framework for zero-shot embodied navigation. EvoMemNav constructs a Visual-Semantic Memory Graph (VSMGraph) that keeps raw views as first-class memory and organizes them with lightweight semantic cues and topological relations into a room-view-object hierarchy, preserving fine-grained details for disambiguation and Stop verification. To scale to growing memory, we introduce a budgeted coarse-to-fine policy: a coarse stage compresses the search space into promising regions, and a fine stage invokes a VLM only for targeted verification and decision. Beyond static memories, EvoMemNav performs reflection-driven write-back after each subtask, updating graph-attached priors that encode accumulated environmental knowledge to refine future decisions without retraining. Experiments on GOAT-Bench and HM3D across object, text-description, and image-goal modalities show consistent gains in SR/SPL, with better multi-instance disambiguation, fewer premature stops, and stronger zero-shot generalization.",
      "link": "https://arxiv.org/abs/2606.03509v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03509v1",
      "published": "2026-06-02T11:27:44Z",
      "updated": "2026-06-02T11:27:44Z",
      "authors": [
        "Zuhao Ge",
        "Xiaosong Jia",
        "Chao Wu",
        "Yuchen Zhou",
        "Zuxuan Wu",
        "Yu-Gang Jiang"
      ],
      "categories": [
        "cs.CV"
      ],
      "score": 68,
      "importanceLevel": "B",
      "oneSentenceSummary": "EvoMemNav：自进化细粒度记忆框架，提升零样本导航长期规划。",
      "summaryCn": "针对零样本导航中记忆稀疏与噪声问题，提出EvoMemNav框架。构建视觉-语义记忆图，以原始视图为一级记忆，结合轻量语义线索分层组织。设计预算粗-细策略，先压缩搜索域，再调用VLM进行目标验证。同时引入反思驱动写回机制，在子任务完成后更新图附先验知识。在GOAT-Bench和HM3D上验证，多模态任务成功率与SPL一致提升，并增强多实例消歧和零样本泛化。",
      "whyImportant": "将原始视图保留为记忆，并通过自我进化机制累积环境知识，显著改善导航中的细粒度决策。",
      "reasonTags": [
        "零样本导航",
        "视觉记忆",
        "层次图",
        "自进化"
      ],
      "innovationPoints": [
        "基于原始视图的视觉-语义记忆图，保留细粒度信息",
        "预算粗-细策略平衡效率与准确性",
        "反思写回实现记忆的自进化，无需重训练"
      ]
    },
    {
      "id": "2606.03175v1",
      "title": "Ask When It Pays: Cost-Aware Open-Ended Interaction for Instance Goal Navigation",
      "summary": "Instance Goal Navigation (IGN) requires an embodied agent to find a specific object instance among distractors from an underspecified natural-language description. We recast interactive IGN as a cost-sensitive uncertainty-reduction problem, where the agent should ask the question whose answer provides the largest reduction in navigation…",
      "summaryRaw": "Instance Goal Navigation (IGN) requires an embodied agent to find a specific object instance among distractors from an underspecified natural-language description. Such ambiguity often cannot be resolved from perception and language alone, making interaction with an oracle a natural mechanism for disambiguation. Prior interactive methods allow oracle queries but treat lightweight clarification and route-level guidance alike, letting agents boost success rate through repeated high-information questions rather than by resolving the underlying ambiguity efficiently. We recast interactive IGN as a cost-sensitive uncertainty-reduction problem, where the agent should ask the question whose answer provides the largest reduction in navigation uncertainty relative to its penalty. To this end, we apply an information-gain analysis on existing navigation corpora to identify which cues reduce navigation uncertainty, yielding a compact set of question types and data-derived weights.However, existing interactive navigation benchmarks do not model the cost of different question types or evaluate how efficiently agents use interaction, making them unsuitable for studying cost-sensitive interaction. Based on this taxonomy, we construct a benchmark for diagnosing interaction behavior and efficiency, together with a Weighted Success Rate metric that penalizes each query by its derived cost. We further propose a zero-shot MLLM navigator that selectively queries at each decision step only when the expected uncertainty reduction justifies the interaction cost.",
      "link": "https://arxiv.org/abs/2606.03175v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03175v1",
      "published": "2026-06-02T05:31:03Z",
      "updated": "2026-06-02T05:31:03Z",
      "authors": [
        "Xunyi Zhao",
        "Sihao Lin",
        "Gengze Zhou",
        "Zerui Li",
        "Shijie Li",
        "Wei Tao",
        "Jiajun Liu",
        "Qi Wu"
      ],
      "categories": [
        "cs.CV",
        "cs.RO"
      ],
      "score": 65,
      "importanceLevel": "B",
      "oneSentenceSummary": "成本感知交互导航：信息增益引导何时向oracle提问，高效消除歧义。",
      "summaryCn": "将交互式实例目标导航建模为成本敏感不确定性消减问题。通过对现有语料的信息增益分析，识别出高效问题类型并赋予成本权重。构建新基准和加权成功率指标，评估交互效率。提出零样本多模态大语言模型导航器，仅在预期不确定性减少值得交互成本时才查询oracle。该方法引导智能体以更低的交互代价达到目标，推动交互式导航的效率研究。",
      "whyImportant": "首次对导航交互进行成本建模，推动从单纯成功率向效率导向的交互策略设计转变。",
      "reasonTags": [
        "交互式导航",
        "成本敏感",
        "信息增益",
        "零样本"
      ],
      "innovationPoints": [
        "基于信息增益定义问题类型成本，建立成本-收益模型",
        "构建诊断性基准和加权成功率指标",
        "零样本导航器动态决策交互时机，提升效率"
      ]
    },
    {
      "id": "2606.03268v1",
      "title": "EaDex: A Cross-Embodiment Dexterous Manipulation Framework from Low-Cost Demonstrations",
      "summary": "Dexterous manipulation learning has long been hindered by the high costs of data and training, as pure reinforcement learning typically requires large-scale interactive exploration and imitation learning depends on high-quality demonstrations that are expensive to collect. These results validate the effectiveness of the proposed low-cost…",
      "summaryRaw": "Dexterous manipulation learning has long been hindered by the high costs of data and training, as pure reinforcement learning typically requires large-scale interactive exploration and imitation learning depends on high-quality demonstrations that are expensive to collect. To address this problem, we propose EaDex, a multi-embodiment dexterous manipulation learning framework under low-cost demonstration conditions, which enables rapid generation of demonstration data and consequently reduces training time for efficient dexterous manipulation. At the data level, EaDex captures human hand motions using only a single RGB-D camera and constructs structured demonstration data through MANO-based hand modeling, data normalization, and motion retargeting. At the learning level, we introduce a contact-reward-based dynamic demonstration annealing mechanism, which guides early-stage exploration under demonstration and gradually transitions to autonomous optimization with accumulating contact rewards. Using our custom dataset, we evaluate EaDex on three dexterous hands and three articulated object-opening tasks, covering nine cross-embodiment manipulation settings, achieving a 55.3% relative improvement over the baseline without demonstration annealing. These results validate the effectiveness of the proposed low-cost demonstration pipeline and the dynamic demonstration annealing strategy for dexterous manipulation learning.",
      "link": "https://arxiv.org/abs/2606.03268v1",
      "pdfLink": "https://arxiv.org/pdf/2606.03268v1",
      "published": "2026-06-02T07:35:18Z",
      "updated": "2026-06-02T07:35:18Z",
      "authors": [
        "Qian Zhao",
        "Xin Tong",
        "Chengdong Wu",
        "Yang Yang",
        "Yingtian Li"
      ],
      "categories": [
        "cs.RO"
      ],
      "score": 60,
      "importanceLevel": "B",
      "oneSentenceSummary": "EaDex：从低成本演示中学习跨具身灵巧操作的框架。",
      "summaryCn": "针对灵巧操作数据与训练成本高的问题，提出EaDex框架。在数据层面，用单RGB-D相机捕获人手运动，通过MANO标准化和重定向生成演示。在学习层面，引入接触奖励驱动的动态演示退火机制，从早期监督引导逐步过渡到自主优化。在三种灵巧手和三种开盖任务上的九种跨具身设置中评估，相对基线提升55.3%，验证了低成本演示管道和退火策略的有效性。",
      "whyImportant": "降低灵巧操作的数据门槛，并利用演示退火实现高效跨具身迁移，对通用灵巧作业有参考价值。",
      "reasonTags": [
        "灵巧操作",
        "跨具身",
        "低成本演示",
        "强化学习"
      ],
      "innovationPoints": [
        "使用单相机和MANO模型生成标准化演示数据",
        "动态演示退火机制平衡监督与自主探索",
        "在多种灵巧手和任务上实现跨具身迁移"
      ]
    }
  ],
  "archives": [
    {
      "dateKey": "20260603",
      "dateLabel": "2026-06-03",
      "generatedAt": "2026-06-03T13:25:39.586214+00:00",
      "paperCount": 10,
      "papers": [
        {
          "id": "2606.03784v1",
          "title": "Revisiting Embodied Chain-of-Thought for Generalizable Robot Manipulation",
          "summary": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale.",
          "summaryRaw": "Embodied chain-of-thought (CoT) aims to bridge linguistic reasoning and robotic control, but its effective form and integration strategy remain underexplored. In this paper, we revisit embodied CoT for vision-language-action (VLA) models at large scale. We construct the largest embodied CoT corpus to date, comprising 978,743 trajectories, 226.3M samples, and 2592.5 hours of robot data. Through extensive experiments, we find that effective embodied CoT should ground high-level semantic understanding into concrete action guidance, such as end-effector movement descriptions and image-space trajectories, while high-level reasoning alone brings only marginal gains. We further show that explicit CoT does not scale reliably when used as an autoregressive action prefix, as it suffers from compounding inference errors and unstable reasoning-action coupling. To address these limitations, we propose ERVLA, a VLA model that uses embodied CoT as representation-shaping supervision rather than mandatory test-time reasoning. ERVLA is trained with a reasoning-dropout strategy, enabling the model to absorb rich reasoning traces during training while predicting actions directly without CoT decoding during inference. This design improves scalability with increasing pre-training data and avoids autoregressive instability. ERVLA achieves state-of-the-art performance on LIBERO-Plus with an 86.9% success rate and reaches 53.2% success rate on VLABench, demonstrating strong out-of-distribution generalization. In real-robot experiments, ERVLA further outperforms competitive state-of-the-art baselines, especially on tasks requiring semantic disambiguation and long-horizon execution. Code, data, and model checkpoints will be released.",
          "link": "https://arxiv.org/abs/2606.03784v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03784v1",
          "published": "2026-06-02T15:37:59Z",
          "updated": "2026-06-02T15:37:59Z",
          "authors": [
            "Nan Sun",
            "Yuan Zhang",
            "Yongkun Yang",
            "Wentao Zhao",
            "Peiyan Li",
            "Jun Guo",
            "Wenxuan Song",
            "Pengxiang Ding"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 95,
          "importanceLevel": "S",
          "oneSentenceSummary": "提出ERVLA：用推理dropout训练，无需测试时推理即可实现SOTA机器人操控。",
          "summaryCn": "本文重新审视具身CoT在VLA模型中的有效性，构建最大具身CoT语料库，发现仅高级推理增益有限，而具体的末端执行器运动描述和图像空间轨迹更有效。提出ERVLA，将CoT作为表示塑造监督而非强制测试时推理，引入推理dropout策略，使模型在训练时吸收丰富推理轨迹，推理时直接预测动作，避免自回归不稳定性。在LIBERO-Plus和VLABench上达到SOTA，真实机器人实验中在语义消歧和长时域任务上表现出色。",
          "whyImportant": "首次大规模证明具身CoT的最佳形式，并提出无需推理时解码的高效VLA训练范式，推动机器人基础模型发展。",
          "reasonTags": [
            "VLA模型",
            "具身CoT",
            "机器人操控",
            "新训练范式"
          ],
          "innovationPoints": [
            "构建大规模具身CoT数据集，揭示具体动作指导优于高级推理",
            "提出推理dropout训练策略，将CoT作为表示学习监督，推理时直接动作解码",
            "在多个基准和真实机器人上验证泛化性和稳定性，超越自回归CoT方法"
          ]
        },
        {
          "id": "2606.03392v1",
          "title": "OpenEAI-Platform: An Open-source Embodied Artificial Intelligence Hardware-Software Unified Platform",
          "summary": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA).",
          "summaryRaw": "Embodied AI in the real world requires both accurate hardware and robust vision-language-action (VLA) policies. We present OpenEAI-Platform, a fully open-source platform that integrates a low-cost 6+1 degree-of-freedom (dof) robotic arm (OpenEAI-Arm) and a reproducible VLA model (OpenEAI-VLA). OpenEAI-Arm provides open-source mechanical designs for low manufacturing cost and compliant control methods for higher accuracy. OpenEAI-VLA builds on Qwen3-VL-4B and uses a Diffusion Transformer action head, and is trained in two stages with only open-source robot and multimodal datasets. Across four real-world manipulation tasks, OpenEAI-Arm outperforms two commercial 6+1-dof arms under the same policy, and OpenEAI-VLA achieves success rates comparable to the large-scale pretrained pi0 baseline with only limited pretraining data. We will release the full hardware designs, drivers, models, and training/data pipelines to support reproducible research and scalable data collection. Our codes, layouts, and models will be released after the paper is accepted.",
          "link": "https://arxiv.org/abs/2606.03392v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03392v1",
          "published": "2026-06-02T09:34:08Z",
          "updated": "2026-06-02T09:34:08Z",
          "authors": [
            "Jinyuan Zhang",
            "Luoyi Fan",
            "Leiyu Wang",
            "Yeqiang Wang",
            "Yicheng Zhu",
            "Cewu Lu",
            "Nanyang Ye"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 90,
          "importanceLevel": "S",
          "oneSentenceSummary": "OpenEAI平台：全开源低成本机器臂与VLA模型，实现可复现的具身研究。",
          "summaryCn": "提出OpenEAI-Platform，包括开源6+1自由度机械臂硬件和基于Qwen3-VL-4B的VLA模型。机械臂采用低制造成本设计和高顺位控制，VLA模型使用Diffusion Transformer动作头，仅用开源数据两阶段训练。在四个真实操作任务中，机械臂性能超越两款商用臂，VLA模型成功率媲美大规模预训练基线pi0。平台将全开源硬件设计、驱动、模型及训练流程，促进可复现研究和规模化数据收集。",
          "whyImportant": "提供首个完整的开源硬件-软件具身平台，低成本可复现，推动社区标准化与规模化研究。",
          "reasonTags": [
            "开源平台",
            "VLA模型",
            "机器人硬件",
            "可复现性"
          ],
          "innovationPoints": [
            "开源高性价比机械臂设计，结合高精度顺位控制",
            "基于扩散Transformer的VLA，仅用开源数据达到与大规模预训练模型可比性能",
            "全栈开源：硬件、模型、数据管线，支持社区快速迭代"
          ]
        },
        {
          "id": "2606.03127v1",
          "title": "TTT-VLA: Test-Time Latent Prompt Optimization for Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guida…",
          "summaryRaw": "Vision-Language-Action (VLA) models trained on large-scale data have made remarkable progress, but they remain vulnerable to distribution shifts at deployment time. Recent VLA models suggest that prompts can serve as an efficient interface for steering policy behavior, but existing prompt-based steering typically relies on external guidance. This raises a natural question: can test-time training (TTT) for VLA be achieved by optimizing a prompt, so that the steering interface itself can be learned and adapted from interaction? We address this question with TTT-VLA, a test-time training framework based on Latent Prompt Optimization (LPO). During training, the latent prompt is learned with an additional proxy task, providing an extra learned conditioning signal for policy learning. At test time, TTT is performed by collecting interaction data from the current environment and optimizing only the latent prompt on those data using the proxy task's self-supervised signal, without modifying the policy itself. Experiments on SimplerEnv demonstrate that the proposed method consistently improves task success rates in both single- and multi-embodiment settings. Further analysis shows that the gains arise primarily from correcting a small number of critical decisions rather than globally altering policy behavior. These results suggest that LPO provides an effective and practical pathway for deployment-time improvement of foundation manipulation policies.",
          "link": "https://arxiv.org/abs/2606.03127v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03127v1",
          "published": "2026-06-02T04:10:39Z",
          "updated": "2026-06-02T04:10:39Z",
          "authors": [
            "Wenbo Zhang",
            "Jianxiong Li",
            "Shuai Yang",
            "Sijin Chen",
            "Jiajun Liu",
            "Lingqiao Liu",
            "Xiao Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 85,
          "importanceLevel": "A",
          "oneSentenceSummary": "TTT-VLA：通过测试时优化潜在提示，无需改动模型即可提升策略鲁棒性。",
          "summaryCn": "针对VLA模型部署时的分布偏移问题，提出TTT-VLA框架。训练时学习潜在提示作为额外条件信号，测试时利用代理任务的自监督信号优化该潜在提示，无需修改策略网络。在SimplerEnv上的实验表明，该方法在单具身和多具身设置下均持续提升任务成功率，且主要纠正少数关键决策而非全局改变行为，为部署时策略改进提供了有效且实用的途径。",
          "whyImportant": "将测试时训练思想引入VLA，仅优化潜在提示即可适应新环境，轻量且通用，提升基础策略的可靠性。",
          "reasonTags": [
            "测试时训练",
            "VLA模型",
            "分布偏移",
            "策略自适应"
          ],
          "innovationPoints": [
            "提出基于潜在提示优化的测试时训练框架，适配VLA模型",
            "仅用少量交互数据优化提示，不修改原策略，实现高效部署适应",
            "实验证明主要修正关键决策，保持行为整体一致性"
          ]
        },
        {
          "id": "2606.03188v1",
          "title": "GeoSem-WAM: Geometry- and Semantic-Aware World Action Models",
          "summary": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision.",
          "summaryRaw": "Recent World Action Models (WAMs) have demonstrated impressive capabilities in embodied decision-making. However, whether their effectiveness stems from explicit future imagination during inference or representation learning induced by predictive training remains an open question. Emerging evidence suggests the primary advantage lies in learning robust latent representations rather than generating future observations at test time. Nevertheless, existing WAMs mainly rely on RGB-based future prediction, which provides limited structural and spatial understanding of complex environments. To address this, we propose a structured world modeling framework that enhances latent representations through geometric and semantic supervision. Alongside future RGB prediction, our model introduces two auxiliary prediction branches for future geometry and semantic representations, enabling it to jointly capture scene dynamics, spatial geometry, and semantic context within a unified latent space. Crucially, our approach preserves efficient inference by avoiding explicit future rollout or video generation at test time. Extensive experiments show that incorporating structured world supervision consistently improves action prediction accuracy, scene understanding, and robustness under challenging embodied scenarios, highlighting its potential for advancing scalable and efficient WAMs.",
          "link": "https://arxiv.org/abs/2606.03188v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03188v1",
          "published": "2026-06-02T05:48:02Z",
          "updated": "2026-06-02T05:48:02Z",
          "authors": [
            "Fulong Ma",
            "Daojie Peng",
            "Wenjun Yue",
            "Jiahang Cao",
            "Bintao Wang",
            "Qiang Zhang",
            "Jun Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 83,
          "importanceLevel": "A",
          "oneSentenceSummary": "GeoSem-WAM：融合几何与语义监督的世界动作模型，提升表示学习。",
          "summaryCn": "针对现有世界动作模型依赖RGB预测且缺乏结构化理解的问题，提出GeoSem-WAM。在预测未来RGB帧的同时，引入未来几何和语义表示的辅助预测分支，联合捕捉场景动态、空间几何与语义上下文。该方法在训练时增强潜在表示，测试时不需显式未来生成，保持高效推理。实验证明结构化世界监督持续提升动作预测精度、场景理解和鲁棒性，为规模化、高效率的WAM提供新方向。",
          "whyImportant": "揭示WAM的关键在于表示学习而非生成，通过多模态监督增强结构化理解，推进高效世界模型设计。",
          "reasonTags": [
            "世界动作模型",
            "几何语义监督",
            "表示学习",
            "具身决策"
          ],
          "innovationPoints": [
            "点明世界动作模型的优势源于表示学习，而非显式未来生成",
            "多分支预测未来几何与语义，构建结构化潜在空间",
            "保持推理高效性，避免推理时视频生成，便于实际部署"
          ]
        },
        {
          "id": "2606.03943v1",
          "title": "PointAction: 3D Points as Universal Action Representations for Robot Control",
          "summary": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling.",
          "summaryRaw": "Video-Action Models (VAMs) leverage the broad visual dynamics captured by pre-trained video diffusion models, offering a promising path toward generalizable robot manipulation. However, RGB-only video rollouts are not directly actionable: they leave metric 3D motion, contact geometry, and fine-grained spatial constraints under-specified, making action grounding ambiguous. Meanwhile, scaling action supervision across diverse tasks and embodiments remains costly. We present PointAction, a framework that bridges video predictions to robot actions through explicit point-based 4D modeling. PointAction fine-tunes a foundation video generation model to jointly predict future RGB frames and dynamic 3D pointmaps, producing temporally consistent 3D motion of task-relevant scene geometry. These point dynamics serve as a structured, embodiment-agnostic action interface, which a diffusion-based action decoder maps to executable robot actions. By using metric 3D point dynamics as the interface between video prediction and control, PointAction reduces the ambiguity of RGB-only action grounding and supports transfer across tasks and embodiments with limited action supervision. Experiments show that PointAction achieves state-of-the-art 4D generation quality on robot scenes, outperforms existing baselines in simulation, and generalizes to two real robot arms unseen during pretraining.",
          "link": "https://arxiv.org/abs/2606.03943v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03943v1",
          "published": "2026-06-02T17:30:50Z",
          "updated": "2026-06-02T17:30:50Z",
          "authors": [
            "Mutian Tong",
            "Han Jiang",
            "Qiao Feng",
            "Lingjie Liu",
            "Jiatao Gu"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 82,
          "importanceLevel": "A",
          "oneSentenceSummary": "PointAction：用3D点图作为通用动作表示，桥接视频预测与机器人控制。",
          "summaryCn": "针对现有视频动作模型RGB输出无法直接执行动作的问题，提出PointAction框架。微调基础视频生成模型，同时预测未来RGB帧和动态3D点图，产生时序一致的场景几何运动。这些点动力学作为结构化的、具身无关的动作接口，再由扩散动作解码器映射为机器人动作。实验表明，该方法在机器人场景4D生成质量上达到SOTA，在仿真和两个真实机械臂上泛化良好，减少了对大量动作监督的需求。",
          "whyImportant": "首次以3D点动力学作为视频预测与控制之间的通用接口，降低动作接地歧义，促进跨具身泛化。",
          "reasonTags": [
            "视频动作模型",
            "3D点图",
            "动作表示",
            "跨具身"
          ],
          "innovationPoints": [
            "提出用动态3D点图作为视频与动作间的结构化桥梁",
            "联合预测RGB与点图，保持时序一致性，减少动作监督需求",
            "扩散解码器实现点动力学到机器人动作的映射，支持多具身"
          ]
        },
        {
          "id": "2606.03609v1",
          "title": "A 3D Isovist World Model -- Revealing a City's Unseen Geometry and Its Emergent Cross-City Signature",
          "summary": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. The representation is lightweight, interpretable, and reproducible, offering a geometric substrate for spatial reasoning in embodied AI, robotics, and urban analysis, released with an open dataset and pipeline.",
          "summaryRaw": "Embodied agents that navigate cities rely on world models that predict how their surroundings will change as they move. But for navigation, what matters is not what the buildings look like; it is where the agent can go. Most world models nonetheless predict appearance, learning how a scene looks rather than the space an agent can move through. Those that do target geometry, such as bird's-eye-view occupancy grids, flatten the three-dimensional environment onto a ground plane, discarding the above-ground and multi-level structure that shapes real navigation. What is missing is a predictive target that captures the navigable geometry an agent actually traverses, without photometric entanglement and without collapsing the third dimension. Our key idea is to model the open volume between buildings, the negative space, encoded as a 3D isovist: a spherical visibility-depth map recording the distance to the nearest surface in every direction. We introduce an embodied world model that predicts the next isovist from a short history of past isovists and a movement action. The prediction is formulated as a depth residual so the decoder inherits sharp building edges, trained with self-rollout scheduled sampling to keep corrupted context on the geometry manifold, and equipped with a persistent latent bird's-eye-view spatial map for cross-path consistency. Our central finding is emergent and unexpected: a single city-blind model trained on Manhattan and Paris develops a cross-city spatial signature, with city identity linearly decodable from its temporal latents far above single-frame baselines, so the signature lives in the learned dynamics rather than in appearance. The representation is lightweight, interpretable, and reproducible, offering a geometric substrate for spatial reasoning in embodied AI, robotics, and urban analysis, released with an open dataset and pipeline.",
          "link": "https://arxiv.org/abs/2606.03609v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03609v1",
          "published": "2026-06-02T13:11:30Z",
          "updated": "2026-06-02T13:11:30Z",
          "authors": [
            "Xuhui Lin",
            "Stephen Law",
            "Nanjiang Chen",
            "Kunyao Li",
            "Tao Yang"
          ],
          "categories": [
            "cs.RO",
            "cs.LG"
          ],
          "score": 78,
          "importanceLevel": "A",
          "oneSentenceSummary": "3D等视域世界模型：预测导航空间几何，发现跨城市动态签名。",
          "summaryCn": "提出一种无外观纠缠的几何世界模型，以3D等视域（球面可见距离图）作为预测目标，避免传统世界模型对RGB的依赖。模型根据历史等视域和运动预测下一视域，采用深度残差和自展采样训练，并引入持久BEV隐图。意外发现：在曼哈顿和巴黎训练的单一模型，其时间隐变量可线性解码城市身份，说明签名存于学习动态而非外观。表示轻量可解释，为具身AI、机器人及城市分析提供几何推理基底，附带开源数据。",
          "whyImportant": "以纯几何方式建模可导航空间，为导航世界模型提供新思路，且发现城市间的动态签名，具启发性。",
          "reasonTags": [
            "世界模型",
            "等视域",
            "几何推理",
            "导航"
          ],
          "innovationPoints": [
            "以3D等视域作为预测目标，分离外观干扰，聚焦可导航几何",
            "自展训练与持久BEV隐图保证跨路径一致性",
            "发现模型动力学中蕴含城市身份信息，揭示空间签名"
          ]
        },
        {
          "id": "2606.03682v1",
          "title": "GN0: Toward a Unified Paradigm for Generation, Evaluation, and Policy Learning in Visual-Language Navigation",
          "summary": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Overall, GN-Matrix offers a unified framework spanning data, simulation, and learning, advancing embodied navigation in research and industrial applications.",
          "summaryRaw": "Embodied navigation connects intelligent agents with the physical world and is fundamental for general robotic intelligence. Limited availability and quality of navigation data have constrained Vision-and-Language Navigation (VLN) systems' generalization and long-horizon capabilities. To address this, we curate diverse 3D scenes and develop an automated pipeline for large-scale navigation data, resulting in the GN-Matrix dataset. Building on a 3D Gaussian Splatting (3DGS) engine, we introduce a high-fidelity simulation platform supporting interactive roaming and collision-aware navigation. We further propose GN-Bench, the first BEV-based benchmark incorporating dynamic 3DGS avatars for human-robot interaction evaluation. To leverage the simulator, we develop an RL-driven navigation foundation model, Break and Establish (BAE). After supervised learning, DAgger exposes the model to rollout-induced states, breaking narrow expert-centric distributions and enabling downstream RL exploration. This unified VLN paradigm integrates map-based and map-free tasks, including instruction following, human following, and goal navigation. GN-BAE formalizes high-fidelity 3DGS-rendered Bird's Eye View representations as compact memory, unlocking latent spatial reasoning in VLMs. Extensive evaluations on GN-Bench and VLN-CE show that GN0 outperforms state-of-the-art VLN methods. Overall, GN-Matrix offers a unified framework spanning data, simulation, and learning, advancing embodied navigation in research and industrial applications.",
          "link": "https://arxiv.org/abs/2606.03682v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03682v1",
          "published": "2026-06-02T14:05:47Z",
          "updated": "2026-06-02T14:05:47Z",
          "authors": [
            "Xinhai Li",
            "Xiaotao Zhang",
            "Yuehao Huang",
            "Jiankun Dong",
            "Tianhang Wang",
            "Sunyao Zhou",
            "Yunzi Wu",
            "Chengnuo Sun"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 72,
          "importanceLevel": "B",
          "oneSentenceSummary": "GN0统一范式：集成生成、评估与策略学习的视觉语言导航。",
          "summaryCn": "为解决视觉语言导航数据稀缺和泛化问题，构建大规模数据集GN-Matrix和基于3D高斯泼溅的高保真仿真平台，支持交互漫游与碰撞感知导航。提出BEV基准GN-Bench评估人机交互。开发RL驱动的导航基础模型BAE，结合监督学习和DAgger打破专家分布，使VLM通过BEV表示解锁空间推理。GN0在GN-Bench和VLN-CE上超越现有方法，形成数据、仿真与学习统一框架。",
          "whyImportant": "首次提出BEV导航基准并融合3DGS仿真，统一多任务导航范式，推动导航通用模型发展。",
          "reasonTags": [
            "视觉语言导航",
            "3DGS仿真",
            "BEV基准",
            "统一范式"
          ],
          "innovationPoints": [
            "构建大规模3DGS导航仿真器和BEV交互基准",
            "BAE模型通过DAgger和RL打破专家数据分布",
            "用BEV紧凑记忆激活VLM的空间推理能力"
          ]
        },
        {
          "id": "2606.03509v1",
          "title": "EvoMemNav: Efficient Self-Evolving Fine-Grained Memory for Zero-Shot Embodied Navigation",
          "summary": "Building memory is essential for long-horizon planning in zero-shot embodied navigation. We present EvoMemNav, an efficient, self-evolving, fine-grained memory framework for zero-shot embodied navigation.",
          "summaryRaw": "Building memory is essential for long-horizon planning in zero-shot embodied navigation. Detector-centric scene graphs often compress observations into sparse nodes, discarding fine-grained visual evidence and accumulating noise, while 3D reconstruction-based methods remain computationally prohibitive. We present EvoMemNav, an efficient, self-evolving, fine-grained memory framework for zero-shot embodied navigation. EvoMemNav constructs a Visual-Semantic Memory Graph (VSMGraph) that keeps raw views as first-class memory and organizes them with lightweight semantic cues and topological relations into a room-view-object hierarchy, preserving fine-grained details for disambiguation and Stop verification. To scale to growing memory, we introduce a budgeted coarse-to-fine policy: a coarse stage compresses the search space into promising regions, and a fine stage invokes a VLM only for targeted verification and decision. Beyond static memories, EvoMemNav performs reflection-driven write-back after each subtask, updating graph-attached priors that encode accumulated environmental knowledge to refine future decisions without retraining. Experiments on GOAT-Bench and HM3D across object, text-description, and image-goal modalities show consistent gains in SR/SPL, with better multi-instance disambiguation, fewer premature stops, and stronger zero-shot generalization.",
          "link": "https://arxiv.org/abs/2606.03509v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03509v1",
          "published": "2026-06-02T11:27:44Z",
          "updated": "2026-06-02T11:27:44Z",
          "authors": [
            "Zuhao Ge",
            "Xiaosong Jia",
            "Chao Wu",
            "Yuchen Zhou",
            "Zuxuan Wu",
            "Yu-Gang Jiang"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 68,
          "importanceLevel": "B",
          "oneSentenceSummary": "EvoMemNav：自进化细粒度记忆框架，提升零样本导航长期规划。",
          "summaryCn": "针对零样本导航中记忆稀疏与噪声问题，提出EvoMemNav框架。构建视觉-语义记忆图，以原始视图为一级记忆，结合轻量语义线索分层组织。设计预算粗-细策略，先压缩搜索域，再调用VLM进行目标验证。同时引入反思驱动写回机制，在子任务完成后更新图附先验知识。在GOAT-Bench和HM3D上验证，多模态任务成功率与SPL一致提升，并增强多实例消歧和零样本泛化。",
          "whyImportant": "将原始视图保留为记忆，并通过自我进化机制累积环境知识，显著改善导航中的细粒度决策。",
          "reasonTags": [
            "零样本导航",
            "视觉记忆",
            "层次图",
            "自进化"
          ],
          "innovationPoints": [
            "基于原始视图的视觉-语义记忆图，保留细粒度信息",
            "预算粗-细策略平衡效率与准确性",
            "反思写回实现记忆的自进化，无需重训练"
          ]
        },
        {
          "id": "2606.03175v1",
          "title": "Ask When It Pays: Cost-Aware Open-Ended Interaction for Instance Goal Navigation",
          "summary": "Instance Goal Navigation (IGN) requires an embodied agent to find a specific object instance among distractors from an underspecified natural-language description. We recast interactive IGN as a cost-sensitive uncertainty-reduction problem, where the agent should ask the question whose answer provides the largest reduction in navigation…",
          "summaryRaw": "Instance Goal Navigation (IGN) requires an embodied agent to find a specific object instance among distractors from an underspecified natural-language description. Such ambiguity often cannot be resolved from perception and language alone, making interaction with an oracle a natural mechanism for disambiguation. Prior interactive methods allow oracle queries but treat lightweight clarification and route-level guidance alike, letting agents boost success rate through repeated high-information questions rather than by resolving the underlying ambiguity efficiently. We recast interactive IGN as a cost-sensitive uncertainty-reduction problem, where the agent should ask the question whose answer provides the largest reduction in navigation uncertainty relative to its penalty. To this end, we apply an information-gain analysis on existing navigation corpora to identify which cues reduce navigation uncertainty, yielding a compact set of question types and data-derived weights.However, existing interactive navigation benchmarks do not model the cost of different question types or evaluate how efficiently agents use interaction, making them unsuitable for studying cost-sensitive interaction. Based on this taxonomy, we construct a benchmark for diagnosing interaction behavior and efficiency, together with a Weighted Success Rate metric that penalizes each query by its derived cost. We further propose a zero-shot MLLM navigator that selectively queries at each decision step only when the expected uncertainty reduction justifies the interaction cost.",
          "link": "https://arxiv.org/abs/2606.03175v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03175v1",
          "published": "2026-06-02T05:31:03Z",
          "updated": "2026-06-02T05:31:03Z",
          "authors": [
            "Xunyi Zhao",
            "Sihao Lin",
            "Gengze Zhou",
            "Zerui Li",
            "Shijie Li",
            "Wei Tao",
            "Jiajun Liu",
            "Qi Wu"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 65,
          "importanceLevel": "B",
          "oneSentenceSummary": "成本感知交互导航：信息增益引导何时向oracle提问，高效消除歧义。",
          "summaryCn": "将交互式实例目标导航建模为成本敏感不确定性消减问题。通过对现有语料的信息增益分析，识别出高效问题类型并赋予成本权重。构建新基准和加权成功率指标，评估交互效率。提出零样本多模态大语言模型导航器，仅在预期不确定性减少值得交互成本时才查询oracle。该方法引导智能体以更低的交互代价达到目标，推动交互式导航的效率研究。",
          "whyImportant": "首次对导航交互进行成本建模，推动从单纯成功率向效率导向的交互策略设计转变。",
          "reasonTags": [
            "交互式导航",
            "成本敏感",
            "信息增益",
            "零样本"
          ],
          "innovationPoints": [
            "基于信息增益定义问题类型成本，建立成本-收益模型",
            "构建诊断性基准和加权成功率指标",
            "零样本导航器动态决策交互时机，提升效率"
          ]
        },
        {
          "id": "2606.03268v1",
          "title": "EaDex: A Cross-Embodiment Dexterous Manipulation Framework from Low-Cost Demonstrations",
          "summary": "Dexterous manipulation learning has long been hindered by the high costs of data and training, as pure reinforcement learning typically requires large-scale interactive exploration and imitation learning depends on high-quality demonstrations that are expensive to collect. These results validate the effectiveness of the proposed low-cost…",
          "summaryRaw": "Dexterous manipulation learning has long been hindered by the high costs of data and training, as pure reinforcement learning typically requires large-scale interactive exploration and imitation learning depends on high-quality demonstrations that are expensive to collect. To address this problem, we propose EaDex, a multi-embodiment dexterous manipulation learning framework under low-cost demonstration conditions, which enables rapid generation of demonstration data and consequently reduces training time for efficient dexterous manipulation. At the data level, EaDex captures human hand motions using only a single RGB-D camera and constructs structured demonstration data through MANO-based hand modeling, data normalization, and motion retargeting. At the learning level, we introduce a contact-reward-based dynamic demonstration annealing mechanism, which guides early-stage exploration under demonstration and gradually transitions to autonomous optimization with accumulating contact rewards. Using our custom dataset, we evaluate EaDex on three dexterous hands and three articulated object-opening tasks, covering nine cross-embodiment manipulation settings, achieving a 55.3% relative improvement over the baseline without demonstration annealing. These results validate the effectiveness of the proposed low-cost demonstration pipeline and the dynamic demonstration annealing strategy for dexterous manipulation learning.",
          "link": "https://arxiv.org/abs/2606.03268v1",
          "pdfLink": "https://arxiv.org/pdf/2606.03268v1",
          "published": "2026-06-02T07:35:18Z",
          "updated": "2026-06-02T07:35:18Z",
          "authors": [
            "Qian Zhao",
            "Xin Tong",
            "Chengdong Wu",
            "Yang Yang",
            "Yingtian Li"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 60,
          "importanceLevel": "B",
          "oneSentenceSummary": "EaDex：从低成本演示中学习跨具身灵巧操作的框架。",
          "summaryCn": "针对灵巧操作数据与训练成本高的问题，提出EaDex框架。在数据层面，用单RGB-D相机捕获人手运动，通过MANO标准化和重定向生成演示。在学习层面，引入接触奖励驱动的动态演示退火机制，从早期监督引导逐步过渡到自主优化。在三种灵巧手和三种开盖任务上的九种跨具身设置中评估，相对基线提升55.3%，验证了低成本演示管道和退火策略的有效性。",
          "whyImportant": "降低灵巧操作的数据门槛，并利用演示退火实现高效跨具身迁移，对通用灵巧作业有参考价值。",
          "reasonTags": [
            "灵巧操作",
            "跨具身",
            "低成本演示",
            "强化学习"
          ],
          "innovationPoints": [
            "使用单相机和MANO模型生成标准化演示数据",
            "动态演示退火机制平衡监督与自主探索",
            "在多种灵巧手和任务上实现跨具身迁移"
          ]
        }
      ]
    },
    {
      "dateKey": "20260602",
      "dateLabel": "2026-06-02",
      "generatedAt": "2026-06-02T15:10:06.610001+00:00",
      "paperCount": 10,
      "papers": [
        {
          "id": "2606.01955v1",
          "title": "WALL-WM: Carving World Action Modeling at the Event Joints",
          "summary": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Specifically, it pairs event-grounded VLA pretraining with a data ecosystem built from event-level captions and c…",
          "summaryRaw": "WALL-WM is a World Action Model that shifts video-action learning from chunk-centric optimization to event-grounded Vision-Language-Action pretraining, using semantically coherent action events as the atomic unit of learning. Existing WAMs commonly initialize from multimodal or video foundation models and then optimize fixed-length action chunks conditioned directly on the current observation and instruction. Although convenient, this chunk-centric formulation creates a fundamental granularity mismatch. Language describes semantic goals and events, vision evolves through continuous scene dynamics, and actions operate at control-level timescales; forcing all three into the same fixed-length prediction window turns VLA training into short-horizon correlation fitting. WALL-WM addresses this mismatch by organizing both supervision and data around semantic events. Specifically, it pairs event-grounded VLA pretraining with a data ecosystem built from event-level captions and cluster-balanced sampling, enabling scalable learning over diverse behaviors, scenes, and task structures. From the same event-pretrained backbone, WALL-WM supports two complementary inference modes. The event mode consumes next-event descriptions and enables variable-length execution chunks, while the unified mode uses a VLM with Staircase Decoding to condition conventional fixed-length chunk inference while preserving a gradient-continuous VLA path. Together with Muon-optimizer-based large-scale pretraining infrastructure, WALL-WM provides a practical scale-up recipe for general-purpose WAMs. Experiments show that WALL-WM generalizes broadly across language, scenes, and tasks, achieving state-of-the-art performance in large-scale real-world generalization evaluation.",
          "link": "https://arxiv.org/abs/2606.01955v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01955v1",
          "published": "2026-06-01T09:14:51Z",
          "updated": "2026-06-01T09:14:51Z",
          "authors": [
            "Shalfun Li",
            "Victor Yao",
            "Charles Yang",
            "Truth Qu",
            "Regis Cheng",
            "Ryan Yu",
            "Howard Lu",
            "Newton Von"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 95,
          "importanceLevel": "S",
          "oneSentenceSummary": "WALL-WM以事件为单位预训练世界动作模型，统一VLA学习。",
          "summaryCn": "WALL-WM提出以语义事件为原子单元的世界动作模型预训练方法，摒弃固定长度块限制，通过事件级数据标注与聚类采样构建数据生态，支持事件模式与统一模式双推理，在大规模真实场景泛化评估中达到最新性能，显著提升跨任务泛化，为VLA通用世界模型提供可扩展方案。",
          "whyImportant": "根本解决VLA训练的粒度不匹配，提供通用世界动作模型扩展方案。",
          "reasonTags": [
            "世界动作模型",
            "事件预训练",
            "VLA",
            "数据生态"
          ],
          "innovationPoints": [
            "事件级VLA预训练框架",
            "双模式推理：事件模式与统一模式",
            "大规模实际泛化评估"
          ]
        },
        {
          "id": "2606.01847v1",
          "title": "The Lie We Tell: Correcting the Euclidean Fallacy in Vision Language Action Policies via Score Matching on Tangent Space",
          "summary": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. We further validate our method on real robot and the results show that our methodology outperfor…",
          "summaryRaw": "Diffusion-based Vision-Language-Action policies achieve remarkable success in robotic manipulation, yet commit a fundamental geometric error we term the $\\textbf{Euclidean Fallacy}$: representing SE(3) poses as flat $\\mathbb{R}^{12}$ vectors. This approximation induces (1) manifold drift violating SO(3) constraints, (2) broken equivariance under coordinate transformations, and (3) non-geodesic trajectories with excessive kinematic cost. We introduce $\\textbf{Lie Diffuser Actor (LDA)}$, a diffusion framework operating intrinsically on SE(3). Our method injects noise through left-invariant SDEs, predicts scores in the tangent space, and retracts samples via the exponential map. This formulation eliminates manifold drift by construction while guaranteeing coordinate-frame equivariance and geodesic optimality. On CALVIN ABC$\\rightarrow$D, LDA improves average task length from $3.27$ to $3.51$ ($+7.3\\%$). We further validate our method on real robot and the results show that our methodology outperforms the baseline on majority tasks.",
          "link": "https://arxiv.org/abs/2606.01847v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01847v1",
          "published": "2026-06-01T07:59:29Z",
          "updated": "2026-06-01T07:59:29Z",
          "authors": [
            "Bing-Cheng Chuang",
            "I-Hsuan Chu",
            "Bor-Jiun Lin",
            "YuanFu Yang",
            "Min Sun",
            "Chun-Yi Lee"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 92,
          "importanceLevel": "S",
          "oneSentenceSummary": "Lie Diffuser Actor在SE(3)上进行扩散，根治欧几里得谬误。",
          "summaryCn": "扩散VLA将SE(3)姿态视为R^12向量，导致流形漂移、等变性缺失。本文提出Lie Diffuser Actor，在SE(3)切空间进行分数匹配，通过左不变SDE和指数映射生成动作，确保等变性与测地最优。为VLA几何表示提供正确范式，实验在CALVIN和真实机器人操纵中显著优于基线。",
          "whyImportant": "从几何底层修正VLA表示错误，提升操纵精度与鲁棒性。",
          "reasonTags": [
            "SE(3)扩散",
            "几何纠偏",
            "VLA",
            "机器人操纵"
          ],
          "innovationPoints": [
            "SE(3)内在扩散生成",
            "左不变SDE与切线分数",
            "测地轨迹保证"
          ]
        },
        {
          "id": "2606.02486v1",
          "title": "Intercepting the Future: Latent-Space Predictive World Model for Dynamic VLA Manipulation",
          "summary": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow.",
          "summaryRaw": "Vision-Language-Action (VLA) models generalize across static manipulation but fail when objects move during task execution. They map the current observation to an action and assume the scene is stationary between observation and execution, so at any non-trivial object speed the resulting latency exceeds the time available to grasp. We close this gap with AHEAD (Anticipatory Horizon Extrapolation with Adaptive Dynamics), a predict-then-act wrapper that augments a frozen VLA with a motion-aware latent world model. A small world model trained on manipulation video forecasts future patch tokens in the VLA's feature space, conditioned on per-token velocity and acceleration from optical flow. A language-and-motion saliency mask concentrates prediction on task-relevant patches, and the model rolls forward for an adaptive horizon, halting when prediction uncertainty crosses a threshold. The frozen action decoder then receives the predicted future tokens in place of the current ones. AHEAD adds 4.9M parameters to a frozen 7B OpenVLA and reaches 79 to 97% success across 20 dynamic simulation scenarios where the strongest baseline reaches 31 to 58%. On a physical UFactory xArm 7, AHEAD succeeds on 29/30 to 30/30 on three conveyor and rolling-ball tasks, 23/30 on paddle interception, and 19/30 on projectile catching where every baseline scores 0/30.",
          "link": "https://arxiv.org/abs/2606.02486v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02486v1",
          "published": "2026-06-01T16:55:38Z",
          "updated": "2026-06-01T16:55:38Z",
          "authors": [
            "Shahram Najam Syed",
            "Arthur Jakobsson",
            "Haoran Hao",
            "Jeffrey Ichnowski"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 90,
          "importanceLevel": "S",
          "oneSentenceSummary": "AHEAD冻结VLA上加装运动世界模型实现动态操作。",
          "summaryCn": "AHEAD为静态VLA模型加装运动感知潜在世界模型，利用光流估计速度和加速度，预测VLA特征空间中的未来patch tokens，自适应滚动至不确定性阈值，再将预测特征输入冻结的动作解码器。在物理臂上实现传送带抓取、飞球拦截等动态任务，成功率达29/30-30/30，而基线全失败，显著提升动态操作能力。",
          "whyImportant": "使静态VLA零修改适应动态场景，极低参数开销实现高效抓取。",
          "reasonTags": [
            "动态VLA",
            "预测世界模型",
            "机器人",
            "光流"
          ],
          "innovationPoints": [
            "冻结VLA上的潜在世界模型",
            "光流驱动的patch token预测",
            "自适应不确定性滚动"
          ]
        },
        {
          "id": "2606.02551v1",
          "title": "AFUN: Towards an Affordance Foundation Model for Functionality Understanding",
          "summary": "Affordance understanding bridges visual perception and physical action, serving as an explainable interface for robot manipulation in open and unstructured real-world environments. ourmodel can be deployed for real-world robot manipulation without finetuning for robot embodiment or using task-specific heuristics, demonstrating the abilit…",
          "summaryRaw": "Affordance understanding bridges visual perception and physical action, serving as an explainable interface for robot manipulation in open and unstructured real-world environments. Yet, building an affordance foundation model that not only understands where and how the interaction should happen, but also generalizes across diverse environments, objects, and tasks, remains a long-standing research challenge. Existing methods typically address only part of this challenge, either localizing task-relevant regions without specifying executable motion, or predicting motion but with limited scalability. In this paper, we present ourmodel, a step towards an affordance foundation model for functionality understanding. From a single RGB-D observation and a language task description, ourmodel predicts a task-conditional functional mask (where to interact) and a 3D post-contact motion curve (how to interact). To support open-world generalization, we build a large-scale standardized data pipeline that converts heterogeneous robot, human, simulation, and real-world scan data into a shared affordance schema with language, masks, and object-centric 3D motion labels. We evaluate ourmodel from three aspects: for affordance segmentation, ourmodel outperforms all baselines by a large margin across 8 test sets from 4 benchmarks, improving mean gIoU/cIoU by +23.9/+26.3; for contact-point prediction, it predicts substantially more accurate points, with a 12.7--61.3% hit-rate gain over the best baseline; and for 3D motion, it achieves the best performance on all three test sets. ourmodel can be deployed for real-world robot manipulation without finetuning for robot embodiment or using task-specific heuristics, demonstrating the ability to adapt to open-world affordance tasks. Project page: https://www.zhaoningwang.com/AFUN",
          "link": "https://arxiv.org/abs/2606.02551v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02551v1",
          "published": "2026-06-01T17:50:16Z",
          "updated": "2026-06-01T17:50:16Z",
          "authors": [
            "Zhaoning Wang",
            "Yi Zhong",
            "Jiawei Fu",
            "Henrik I. Christensen",
            "Jun Gao"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 90,
          "importanceLevel": "A",
          "oneSentenceSummary": "AFUN供能基础模型理解交互位置与3D动作。",
          "summaryCn": "AFUN为通用可供性基础模型，从单张RGB-D和语言指令预测任务条件的功能掩码与3D后接触运动曲线。构建大规模标准化数据管道转换异构数据。在多个基准上大幅度超越现有方法，可零样本部署至真实机器人，实现开放世界操作。统一位置与动作预测，提供可解释交互接口。",
          "whyImportant": "统一语言、视觉与动作，提供可泛化的可供性基础模型。",
          "reasonTags": [
            "可供性基础模型",
            "机器人操作",
            "3D运动",
            "数据标准化"
          ],
          "innovationPoints": [
            "任务条件功能掩码与3D运动联合预测",
            "跨源数据标准化管道",
            "零样本真实世界部署"
          ]
        },
        {
          "id": "2606.02577v1",
          "title": "RoboDream: Compositional World Models for Scalable Robot Data Synthesis",
          "summary": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirem…",
          "summaryRaw": "Scaling robot learning requires large-scale, diverse demonstrations, yet real-world data collection via teleoperation remains prohibitively expensive and time-consuming. While video diffusion models offer a promising avenue for data scaling, existing generative approaches are often limited to superficial visual augmentation, or suffer from embodiment hallucinations that yield physically infeasible motions. We present a generalizable embodiment-centric world model that achieves scalable data generation by synthesizing photorealistic demonstrations with novel objects, in novel scenes, and from novel viewpoints. Our approach anchors generation to rendered robot motion while conditioning on explicit scene and object priors, effectively decoupling trajectory execution from environment synthesis. This formulation has the potential to unlock two powerful data scaling capabilities: (1) retrieval and rebirth, which repurposes existing trajectories into entirely new contexts without new motion data; and (2) prop-free teleoperation, where operators manipulate empty air and the model hallucinates the target objects and scene afterwards, eliminating reset time. We demonstrate with real-world experiments that our generated data consistently improves downstream policy performance and significantly reduces real-world data requirements across diverse manipulation tasks.",
          "link": "https://arxiv.org/abs/2606.02577v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02577v1",
          "published": "2026-06-01T17:59:38Z",
          "updated": "2026-06-01T17:59:38Z",
          "authors": [
            "Junjie Ye",
            "Rong Xue",
            "Basile Van Hoorick",
            "Runhao Li",
            "Harshitha Rajaprakash",
            "Pavel Tokmakov",
            "Muhammad Zubair Irshad",
            "Vitor Guizilini"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 88,
          "importanceLevel": "A",
          "oneSentenceSummary": "RoboDream解耦轨迹与场景，合成逼真机器人数据。",
          "summaryCn": "RoboDream提出具身中心的世界模型，通过渲染机器人运动并条件化场景和物体先验，解耦轨迹执行与环境合成，生成包含新物体、新场景和新视角的光真演示数据。支持检索重生与无道具遥操作，显著减少现实收集成本，提升下游策略性能。实现可扩展的数据合成，降低机器人学习门槛。",
          "whyImportant": "突破物理可行的数据生成，降低数据成本并提升规模化。",
          "reasonTags": [
            "世界模型",
            "数据合成",
            "机器人操纵",
            "具身智能"
          ],
          "innovationPoints": [
            "具身中心生成解耦轨迹与环境",
            "检索重生与无道具遥操作",
            "光真合成提升策略性能"
          ]
        },
        {
          "id": "2606.02307v1",
          "title": "FATE-VLA:Failue-aware test generation for vision-language-action models",
          "summary": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. We reframe VLA evaluation as an active failure-discovery problem and propose a failure-aware test-generation approach that combines diversity-driven explo…",
          "summaryRaw": "Vision-Language-Action (VLA) models are increasingly used as generalist robot policies, yet their evaluation still relies largely on static benchmarks that randomly sample task scenes. In high-dimensional embodied spaces, failures are sparse and clustered, so static benchmarking can underestimate robustness risks. We reframe VLA evaluation as an active failure-discovery problem and propose a failure-aware test-generation approach that combines diversity-driven exploration with surrogate models learned from observed executions. The method steers testing toward high-risk yet diverse scene regions. Across four state-of-the-art VLA models, it uncovers substantially more failures (up to +29.7 % over selected baselines) while revealing more diverse failure modes. This mean that, for instance, in the case of GR00T-N1.6, success rate dropped from 64.4% to 34.7%. More broadly, our findings call for a shift in VLA evaluation: from passive measurement on fixed task suites to adaptive, failure-seeking test generation that exposes the structure of model weaknesses before deployment.",
          "link": "https://arxiv.org/abs/2606.02307v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02307v1",
          "published": "2026-06-01T14:27:13Z",
          "updated": "2026-06-01T14:27:13Z",
          "authors": [
            "Arusa Kanwal",
            "Pablo Valle",
            "Shaukat Ali",
            "Aitor Arrieta"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 85,
          "importanceLevel": "A",
          "oneSentenceSummary": "FATE-VLA主动挖掘VLA失败，暴露稳健性风险。",
          "summaryCn": "FATE-VLA将VLA评估重构为主动失败发现，提出失败感知测试生成方法，结合多样性探索与从执行中学习的替代模型，引导测试向高风险区域，发现更多失败和多样失败模式。在四个最先进VLA模型上，成功率大幅下降。呼吁VLA评估从被动测量转向主动失败搜索。",
          "whyImportant": "重塑VLA评估范式，提前揭示模型弱点，保障部署安全。",
          "reasonTags": [
            "VLA评估",
            "失败发现",
            "测试生成",
            "安全性"
          ],
          "innovationPoints": [
            "主动失败感知测试生成",
            "替代模型引导高风险搜索",
            "揭示隐藏的多样化失败模式"
          ]
        },
        {
          "id": "2606.02105v1",
          "title": "Multimodal Action Diffusion for Robust End-to-End Autonomous Driving",
          "summary": "End-to-End Autonomous Driving (E2E-AD) systems have largely converged on predicting intermediate trajectory waypoints, delegating final control to hand-crafted controllers with GPS access. ADT surpasses previous state-of-the-art on the challenging closed-loop Bench2Drive benchmark while achieving ten times lower latency, demonstrating th…",
          "summaryRaw": "End-to-End Autonomous Driving (E2E-AD) systems have largely converged on predicting intermediate trajectory waypoints, delegating final control to hand-crafted controllers with GPS access. Direct control-signal prediction (outputting throttle, steer and brake in an end-to-end fashion) remains underexplored, and critically, the role of action multimodality in such systems is not well understood. We argue that moving beyond deterministic, single-action outputs is not merely a modelling choice, but a key driver of driving performance, representational quality, and training stability. To validate this, we introduce the Action Diffusion Transformer (ADT), an anchor-free diffusion transformer trained with a MSE objective that natively models the multimodal distribution of plausible driving actions. Rather than committing to a single deterministic command, ADT generates K action candidates and selects the most suitable one at inference via Nearest Neighbour Matching (NNM). Beyond strong benchmark numbers, we show that action multimodality yields measurable benefits in learned representations and behavioral consistency, effects that deterministic architectures cannot replicate. ADT surpasses previous state-of-the-art on the challenging closed-loop Bench2Drive benchmark while achieving ten times lower latency, demonstrating that expressive, multimodal action modelling is both practically efficient and conceptually essential for robust end-to-end driving.",
          "link": "https://arxiv.org/abs/2606.02105v1",
          "pdfLink": "https://arxiv.org/pdf/2606.02105v1",
          "published": "2026-06-01T11:35:35Z",
          "updated": "2026-06-01T11:35:35Z",
          "authors": [
            "Jorge Daniel Rodríguez-Vidal",
            "Diego Porres",
            "Gabriel Villalonga Pineda",
            "Antonio M. López Peña"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 85,
          "importanceLevel": "A",
          "oneSentenceSummary": "多模态动作扩散实现端到端驾驶直接控制。",
          "summaryCn": "本文提出动作扩散Transformer (ADT)，直接生成油门、转向、刹车等多模态动作分布，通过最近邻匹配选取最优动作，实现端到端自动驾驶控制。在Bench2Drive封闭环上超越先前SOTA，延迟降低十倍，证明动作多模态对驾驶性能与表征的关键作用。推动端到端驾驶迈向直接控制。",
          "whyImportant": "推动端到端驾驶抛弃中间迹点，实现高性能直接控制。",
          "reasonTags": [
            "端到端驾驶",
            "动作扩散",
            "多模态",
            "自动驾驶"
          ],
          "innovationPoints": [
            "多模态动作扩散直接输出控制信号",
            "最近邻匹配选择最优动作",
            "极低延迟与强表现"
          ]
        },
        {
          "id": "2606.01600v1",
          "title": "RoboTrustBench: Benchmarking the Trustworthiness of Video World Models for Robotic Manipulation",
          "summary": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. These results show that visual quality and surface-level instruction following are insufficient for trustworthy robotic video world modeling.",
          "summaryRaw": "Video world models are increasingly used in robotic manipulation, yet existing benchmarks mostly evaluate them under valid, feasible, and safe instructions. We introduce RoboTrustBench, a benchmark for evaluating the trustworthiness of video world models under four scenarios: Normal, Constraint-Sensitive, Counterfactual, and Adversarial. Built from real-world DROID episodes, RoboTrustBench contains 1,207 expert-validated instruction-image pairs and a six-dimensional evaluation protocol with 13 fine-grained criteria. Evaluating seven representative video world models with human and MLLM assessment, we find that current models often generate visually coherent videos, but struggle with constraint reasoning, counterfactual grounding, physical interaction, and unsafe-instruction suppression. These results show that visual quality and surface-level instruction following are insufficient for trustworthy robotic video world modeling.",
          "link": "https://arxiv.org/abs/2606.01600v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01600v1",
          "published": "2026-06-01T02:56:09Z",
          "updated": "2026-06-01T02:56:09Z",
          "authors": [
            "Huiqiong Li",
            "Jiayu Wang",
            "Zhiting Mei",
            "Anirudha Majumdar",
            "Jingjing Chen",
            "Bin Zhu"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 82,
          "importanceLevel": "A",
          "oneSentenceSummary": "RoboTrustBench评测视频世界模型可信度。",
          "summaryCn": "RoboTrustBench基于DROID真实数据构建视频世界模型可信度基准，含正常、约束敏感、反事实、对抗四场景，1207个专家标注和13项细粒度标准。评估七个模型发现视觉连贯但约束推理、物理交互差。为机器人视频世界模型提供安全诊断工具。",
          "whyImportant": "首创视频世界模型可信度基准，确保机器人安全建模。",
          "reasonTags": [
            "视频世界模型",
            "可信性",
            "基准",
            "机器人"
          ],
          "innovationPoints": [
            "四场景可信度评测框架",
            "13维细粒度评估",
            "揭示物理推理缺陷"
          ]
        },
        {
          "id": "2606.01757v1",
          "title": "PillarDETR: YOLO-Backbone and RT-DETR Head for Real-Time 3D Object Detection",
          "summary": "Real-time 3D object detection is a critical component for the safe operation of autonomous driving systems and robotics. While LiDAR point clouds provide accurate spatial information, processing them efficiently remains a significant challenge.",
          "summaryRaw": "Real-time 3D object detection is a critical component for the safe operation of autonomous driving systems and robotics. While LiDAR point clouds provide accurate spatial information, processing them efficiently remains a significant challenge. Traditional methods rely on complex 3D convolutions or anchor-based paradigms that struggle to balance detection accuracy with inference speed. In this paper, we propose PillarDETR, a novel end-to-end 3D object detection architecture that combines the efficiency of pillar-based LiDAR encoding with the representational power of modern 2D vision models. Specifically, PillarDETR replaces standard convolutional backbones with a Cross Stage Partial (CSP) network derived from YOLOv8, enabling richer feature extraction from pseudoimages. Furthermore, we discard conventional anchor-based or center-based detection heads in favor of a Real-Time Detection Transformer (RT-DETR) decoder. This hybrid design allows the network to capture global context and directly predict 3D bounding boxes without relying on non-maximum suppression (NMS). Extensive experiments on the KITTI and nuScenes benchmarks demonstrate that PillarDETR achieves a compelling trade-off between mean Average Precision (mAP) and inference latency. Our ablation studies confirm that integrating the YOLOv8 backbone and RT-DETR head yields substantial improvements over the PointPillars baseline, establishing PillarDETR as a highly effective solution for real-time 3D perception.",
          "link": "https://arxiv.org/abs/2606.01757v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01757v1",
          "published": "2026-06-01T06:22:47Z",
          "updated": "2026-06-01T06:22:47Z",
          "authors": [
            "Smit Kadvani",
            "Shriya Gumber",
            "Kriti Faujdar",
            "Harsh Dave"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 80,
          "importanceLevel": "A",
          "oneSentenceSummary": "PillarDETR融合YOLO和RT-DETR实时3D检测。",
          "summaryCn": "PillarDETR创新性地将YOLOv8的跨阶段部分网络作为LiDAR伪图像骨干，并采用RT-DETR的实时检测头，摒弃锚框与NMS，在KITTI和nuScenes上实现了领先的精度与低延迟，为自动驾驶3D感知提供了轻量高效方案。",
          "whyImportant": "提供轻量高效的3D检测方案，适合自动驾驶部署。",
          "reasonTags": [
            "3D检测",
            "实时",
            "自动驾驶",
            "点云"
          ],
          "innovationPoints": [
            "YOLOv8+CSP骨干融合",
            "RT-DETR头无NMS检测",
            "精度-延迟平衡"
          ]
        },
        {
          "id": "2606.01935v1",
          "title": "Unified Driving Tokens: Representation- and Geometry-Guided Discrete Tokenizer for Driving World Models and Planning",
          "summary": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model.",
          "summaryRaw": "Discrete visual tokens should provide a compact representation for both token-based world modeling and planning in autonomous driving. However, most tokenizers are inherited from image generation and are optimized mainly for pixel reconstruction, which may leave a gap between what is easy to generate and what is useful to decode for driving decisions. We present a representation-guided and geometry-enhanced tokenizer that learns discrete tokens under joint supervision. The tokenizer aligns its discrete bottleneck with a frozen DINO feature space through feature decoding, while preserving appearance via RGB reconstruction with perceptual and adversarial losses. To inject geometric state-related cues, we add adjacent-frame depth and relative-pose supervision during training and stabilize joint objectives with multi-codebook quantization. We evaluate the same learned tokens with a lightweight planning readout and a GPT-style next-token world model. Experiments on NAVSIM show improved reconstruction fidelity and representation consistency, competitive planning performance under a fixed decoder, and better generative quality under matched settings.",
          "link": "https://arxiv.org/abs/2606.01935v1",
          "pdfLink": "https://arxiv.org/pdf/2606.01935v1",
          "published": "2026-06-01T09:02:32Z",
          "updated": "2026-06-01T09:02:32Z",
          "authors": [
            "Ziyang Yao",
            "Zeyu Zhu",
            "YunCheng Jiang",
            "Zibin Guo",
            "Huijing Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 78,
          "importanceLevel": "B",
          "oneSentenceSummary": "统一驾驶令牌联合表征与几何引导提升世界模型。",
          "summaryCn": "本文提出表征引导与几何增强的离散分词器，对齐DINO特征空间并保留外观，引入相邻帧深度和相对姿态监督，联合多码本量化。生成的令牌同时用于轻量规划和GPT风格世界模型，在NAVSIM上提升重建与生成性能，为驾驶世界模型紧凑令牌提供新方案。",
          "whyImportant": "为驾驶世界模型开发紧凑有用令牌，统一生成与规划。",
          "reasonTags": [
            "驾驶世界模型",
            "离散分词器",
            "表征学习",
            "规划"
          ],
          "innovationPoints": [
            "联合特征与外观监督的令牌学习",
            "几何状态注入（深度、姿态）",
            "多码本量化稳定训练"
          ]
        }
      ]
    },
    {
      "dateKey": "20260601",
      "dateLabel": "2026-06-01",
      "generatedAt": "2026-06-01T15:56:56.304001+00:00",
      "paperCount": 20,
      "papers": [
        {
          "id": "2605.30280v1",
          "title": "Qwen-VLA: Unifying Vision-Language-Action Modeling across Tasks, Environments, and Robot Embodiments",
          "summary": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
          "link": "https://arxiv.org/abs/2605.30280v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30280v1",
          "published": "2026-05-28T17:36:31Z",
          "updated": "2026-05-28T17:36:31Z",
          "authors": [
            "Qiuyue Wang",
            "Mingsheng Li",
            "Jian Guan",
            "Jinhui Ye",
            "Sicheng Xie",
            "Yitao Liu",
            "Junhao Chen",
            "Zhixuan Liang"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 96
        },
        {
          "id": "2605.25829v1",
          "title": "OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation",
          "summary": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
          "link": "https://arxiv.org/abs/2605.25829v1",
          "pdfLink": "https://arxiv.org/pdf/2605.25829v1",
          "published": "2026-05-25T13:28:33Z",
          "updated": "2026-05-25T13:28:33Z",
          "authors": [
            "Xinzhe Chen",
            "Sihua Ren",
            "Liqi Huang",
            "Haowen Sun",
            "Mingyang Li",
            "Xingyu Chen",
            "Zeyang Liu",
            "Xuguang Lan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 80
        },
        {
          "id": "2605.30484v1",
          "title": "ELAN4D: Embodiment-Centric 4D Supervision for Vision-Language-Action Models via Plug-and-Play Adaptation",
          "summary": "Vision-Language-Action (VLA) models have shown promise for robotic manipulation, yet most existing policies operate reactively by directly regressing actions from current observations, without explicitly modeling future dynamics. Extensive experiments on LIBERO, LIBERO-Plus, RoboTwin2.0 and real-world manipulation tasks demonstrate that…",
          "link": "https://arxiv.org/abs/2605.30484v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30484v1",
          "published": "2026-05-28T19:03:30Z",
          "updated": "2026-05-28T19:03:30Z",
          "authors": [
            "Zeyuan He",
            "Bowen Yang",
            "Zhirui Fang",
            "Keru Zhou",
            "Lei Jiang",
            "Jingjing Qian",
            "Fan Mo",
            "Junchi Yan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 72
        },
        {
          "id": "2605.29114v1",
          "title": "ReasonBreak: Probing Vulnerabilities in Reasoning-Enabled Vision-Language-Action Models for Autonomous Driving",
          "summary": "Vision-Language-Action (VLA) models with integrated reasoning have been proposed for end-to-end autonomous driving, assuming a tight coupling between reasoning and trajectory generation. Our results highlight the need for rigorous evaluation and improved defenses to ensure the safety of reasoning-enabled VLA systems in autonomous driving.",
          "link": "https://arxiv.org/abs/2605.29114v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29114v1",
          "published": "2026-05-27T21:21:37Z",
          "updated": "2026-05-27T21:21:37Z",
          "authors": [
            "Mohammadreza Teymoorianfard",
            "Jean-Philippe Monteuuis",
            "Jonathan Petit",
            "Amir Houmansadr"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 71
        },
        {
          "id": "2605.31041v1",
          "title": "Does Visual Information Play a Decisive Role in Vision-Language-Action Model Driving Behavior?",
          "summary": "Vision-Language-Action (VLA) models have demonstrated promising capability in autonomous driving, highlighting the potential of unified multimodal architectures for jointly modeling perception and planning. However, how current VLA-based driving behavior is grounded in visual information remains poorly understood.",
          "link": "https://arxiv.org/abs/2605.31041v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31041v1",
          "published": "2026-05-29T09:18:32Z",
          "updated": "2026-05-29T09:18:32Z",
          "authors": [
            "Jingtao He",
            "Hongliang Lu",
            "Xiaoyun Qiu",
            "Yixuan Wang",
            "Xinhu Zheng"
          ],
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "score": 69
        },
        {
          "id": "2605.31234v1",
          "title": "HARP-VLA: Human-Robot Aligned Representation Learning for Vision-Language-Action Model",
          "summary": "Learning generalizable vision-language-action (VLA) models from large-scale human videos is promising but challenging due to cross-embodiment discrepancies in both visual observations and executable actions. The learned aligned vision encoder and latent action model provide a unified vision and action representation for VLA-style policy…",
          "link": "https://arxiv.org/abs/2605.31234v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31234v1",
          "published": "2026-05-29T12:36:30Z",
          "updated": "2026-05-29T12:36:30Z",
          "authors": [
            "Xiang Zhu",
            "Puzhen Yuan",
            "Yichen Liu",
            "Jianyu Chen"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 68
        },
        {
          "id": "2605.30877v1",
          "title": "Wall-OSS-0.5 Technical Report",
          "summary": "Large-scale Vision-Language-Action (VLA) pretraining is increasingly adopted as the foundation for robot policies, yet the evidence for pretrained VLAs is almost invariably reported after task-specific fine-tuning.This leaves a foundational question unanswered: does VLA pretraining itself yield executable robot behavior, or does it merel…",
          "link": "https://arxiv.org/abs/2605.30877v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30877v1",
          "published": "2026-05-29T06:04:03Z",
          "updated": "2026-05-29T06:04:03Z",
          "authors": [
            "Ryan Yu",
            "Pushi Zhang",
            "Starrick Liu",
            "Brae Liu",
            "Miracle Kang",
            "Shalfun Li",
            "Lights Shi",
            "Ellie Ma"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 67
        },
        {
          "id": "2605.30795v1",
          "title": "Feat2Go: Visual Feature-Grounded Value Estimation for Embodied Reinforcement Learning",
          "summary": "Reinforcement learning is a promising approach for improving the capabilities of vision-language-action (VLA) models while avoiding the heavy data requirements of imitation learning. Extensive experiments on ManiSkill3 and RoboTwin 2.0 demonstrate that Feat2Go consistently improves the performance of existing VLA models under both single…",
          "link": "https://arxiv.org/abs/2605.30795v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30795v1",
          "published": "2026-05-29T03:36:33Z",
          "updated": "2026-05-29T03:36:33Z",
          "authors": [
            "Junyang Shu",
            "Zhiwei Lin",
            "Bingqing Wei",
            "Yongtao Wang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 66
        },
        {
          "id": "2605.30282v1",
          "title": "Gaze2Act: Gaze-Conditioned Vision-Language-Action Policies for Interactive Robot Manipulation",
          "summary": "Vision-Language-Action (VLA) models have recently shown strong potential for robot learning by following language instructions. To address this limitation, we propose Gaze2Act, a novel VLA framework that leverages human gaze as a dynamic and intuitive intent signal for complex interactive manipulation.",
          "link": "https://arxiv.org/abs/2605.30282v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30282v1",
          "published": "2026-05-28T17:37:16Z",
          "updated": "2026-05-28T17:37:16Z",
          "authors": [
            "Kuangji Zuo",
            "Gen Li",
            "Bofan Lyu",
            "Yanshuo Lu",
            "Boyu Ma",
            "Shijia Han",
            "Xinyu Zhou",
            "Xichen Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 62
        },
        {
          "id": "2605.30226v1",
          "title": "BORA: Bridging Offline Reinforcement Learning and Online Residual Adaptation for Real-World Dexterous VLA Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
          "link": "https://arxiv.org/abs/2605.30226v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30226v1",
          "published": "2026-05-28T16:57:47Z",
          "updated": "2026-05-28T16:57:47Z",
          "authors": [
            "Zhongxi Chen",
            "Yifan Han",
            "Yanming Shao",
            "Huanming Liu",
            "Congsheng Xu",
            "Xiaoyu Chen",
            "Yao Mu",
            "Wenzhao Lian"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 62
        },
        {
          "id": "2605.31196v1",
          "title": "Probing Collision Grounding in Vision-Language Models for Safe Human-Robot Collaboration",
          "summary": "Safe human--robot collaboration requires more than visual description: a monitor must determine whether the robot body is safely separated, already colliding with the scene or a person, or about to collide. Across three frontier or robotics-oriented VLMs and nine visual representations, current models remain far from reliable: the best a…",
          "link": "https://arxiv.org/abs/2605.31196v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31196v1",
          "published": "2026-05-29T12:04:38Z",
          "updated": "2026-05-29T12:04:38Z",
          "authors": [
            "Jun Wang",
            "Xiaohao Xu",
            "Xiaonan Huang"
          ],
          "categories": [
            "cs.AI",
            "cs.CV",
            "cs.RO"
          ],
          "score": 60
        },
        {
          "id": "2605.30834v1",
          "title": "Hide-and-Seek in Trajectories: Discovering Failure Signals for VLA Runtime Monitoring",
          "summary": "Vision-Language-Action (VLA) models enable robots to follow natural language instructions and generalize across diverse tasks, but they remain vulnerable to execution failures that compromise reliability in real-world deployment. We evaluate Hide-and-Seek on LIBERO, VLABench, and a real-world robotic platform across three representative…",
          "link": "https://arxiv.org/abs/2605.30834v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30834v1",
          "published": "2026-05-29T04:40:12Z",
          "updated": "2026-05-29T04:40:12Z",
          "authors": [
            "Seongheon Park",
            "Wendi Li",
            "Changdae Oh",
            "Samuel Yeh",
            "Zsolt Kira",
            "Michael Hagenow",
            "Sharon Li"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.31286v1",
          "title": "DeMaVLA: A Vision-Language-Action Foundation Model for Generalizable Deformable Manipulation",
          "summary": "Real-world household robots require Vision-Language-Action (VLA) foundation models that can acquire reusable manipulation skills across diverse objects, task conditions, and household environments. Experiments show that DeMaVLA achieves competitive performance on RoboTwin and strong real-world results on our household folding benchmark.",
          "link": "https://arxiv.org/abs/2605.31286v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31286v1",
          "published": "2026-05-29T13:20:08Z",
          "updated": "2026-05-29T13:20:08Z",
          "authors": [
            "Taiyi Su",
            "Jian Zhu",
            "Tianjian Wang",
            "Youzhang He",
            "Zitai Huang",
            "Jianjun Zhang",
            "Chong Ma",
            "Hanyang Wang"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 58
        },
        {
          "id": "2605.31271v1",
          "title": "DriveMA: Driving Vision-Language-Action Models with verifiable Meta-Actions",
          "summary": "Driving Vision-Language-Action Models (Driving VLAs) aim to use language to improve end-to-end planning, but the language-action gap limits this promise. We propose DriveMA, a Driving VLA framework built on verifiable meta-actions, which summarize future ego motion into compact language-domain intentions and can be constructed from exper…",
          "link": "https://arxiv.org/abs/2605.31271v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31271v1",
          "published": "2026-05-29T13:03:16Z",
          "updated": "2026-05-29T13:03:16Z",
          "authors": [
            "Weicheng Zheng",
            "Yixin Huang",
            "Qiao Sun",
            "Derun Li",
            "Hang Zhao"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 56
        },
        {
          "id": "2605.31256v1",
          "title": "Before Parc Fermé: RL-Time Pruning for Efficient Embodied LLMs in Autonomous Driving",
          "summary": "Embodied Large Language Models (LLMs) are increasingly used as reasoning modules in robotic control pipelines to improve human-robot interaction, but their memory and generation latency make real-time deployment difficult. On the Jetson AGX Orin mounted on the target robotic platform, the compact models improve decode throughput by up to…",
          "link": "https://arxiv.org/abs/2605.31256v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31256v1",
          "published": "2026-05-29T12:53:33Z",
          "updated": "2026-05-29T12:53:33Z",
          "authors": [
            "Luca Benfenati",
            "Ali Azimi",
            "Matteo Risso",
            "Fabio Carapellese",
            "Daniele Jahier Pagliari",
            "Alessio Burrello"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 56
        },
        {
          "id": "2605.31119v1",
          "title": "Don't Fool Me Twice: Adapting to Adversity in the Wild with Experience-Driven Reasoning",
          "summary": "In robotics, dangers and adversity modes are often embodiment-specific and relative to each agent. A frontier of autonomous mobile robotics is to enable agents to operate effectively in the wild in unseen unstructured environments.",
          "link": "https://arxiv.org/abs/2605.31119v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31119v1",
          "published": "2026-05-29T10:30:02Z",
          "updated": "2026-05-29T10:30:02Z",
          "authors": [
            "Navin Sriram Ravie",
            "Andrew Jong",
            "Krrish Jain",
            "John Liu",
            "Omar Alama",
            "Bijo Sebastian",
            "Sebastian Scherer"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 51
        },
        {
          "id": "2605.30328v1",
          "title": "Supercharging Thermal Gaussian Splatting with Depth Estimation",
          "summary": "Efficient and robust 3D scene representation is crucial in autonomous driving, robotics, and related fields. While RGB images provide valuable content for 3D reconstruction, other modalities like thermal or depth can enable additional information on the environment.",
          "link": "https://arxiv.org/abs/2605.30328v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30328v1",
          "published": "2026-05-28T17:57:35Z",
          "updated": "2026-05-28T17:57:35Z",
          "authors": [
            "Manoj Biswanath",
            "Chenxin Cai",
            "Hannah Schieber",
            "Daniel Roth",
            "Benjamin Busam"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 51
        },
        {
          "id": "2605.30740v1",
          "title": "GSAM: A Generalizable and Safe Robotic Framework for Articulated Object Manipulation",
          "summary": "Articulated object manipulation is a unique challenge for service robots. To address this, we propose GSAM, a generalizable and safe robotic framework for articulated object manipulation.",
          "link": "https://arxiv.org/abs/2605.30740v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30740v1",
          "published": "2026-05-29T02:09:17Z",
          "updated": "2026-05-29T02:09:17Z",
          "authors": [
            "Beichen Shao",
            "Mengying Xie",
            "Heng Su",
            "Wanyi Zhang",
            "Mingyan Li",
            "Yan Ding",
            "Fausto Giunchiglia",
            "Chao Chen"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 50
        },
        {
          "id": "2605.27947v1",
          "title": "SANTS: A State-Adaptive Scheduler for World Action Models",
          "summary": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
          "link": "https://arxiv.org/abs/2605.27947v1",
          "pdfLink": "https://arxiv.org/pdf/2605.27947v1",
          "published": "2026-05-27T04:40:48Z",
          "updated": "2026-05-27T04:40:48Z",
          "authors": [
            "Yirui Sun",
            "Guangyu Zhuge",
            "Keliang Liu",
            "Jie Gu",
            "Xinyu Bing",
            "Zhongxue Gan",
            "Chunxu Tian"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 50
        },
        {
          "id": "2605.31352v1",
          "title": "Haptic Sorter: A Unified Planning Framework for Online Shape Estimation and Real-Time Pose Inference",
          "summary": "Robotics manipulation usually assumes that the shape and pose of the object are known to the robot prior to motion planning. In this work, we propose a unified model-based geometric framework integrating robotic haptic perception, modeling, and manipulation planning.",
          "link": "https://arxiv.org/abs/2605.31352v1",
          "pdfLink": "https://arxiv.org/pdf/2605.31352v1",
          "published": "2026-05-29T14:28:42Z",
          "updated": "2026-05-29T14:28:42Z",
          "authors": [
            "Zhuoyi Lu",
            "Lin Yang",
            "Sri Harsha Turlapati",
            "Domenico Campolo"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 49
        }
      ]
    },
    {
      "dateKey": "20260531",
      "dateLabel": "2026-05-31",
      "generatedAt": "2026-05-31T15:08:03.198820+00:00",
      "paperCount": 20,
      "papers": [
        {
          "id": "2605.30280v1",
          "title": "Qwen-VLA: Unifying Vision-Language-Action Modeling across Tasks, Environments, and Robot Embodiments",
          "summary": "Embodied intelligence is often studied through specialized models for individual tasks such as manipulation or navigation, resulting in fragmented capabilities and limited generalization across tasks, environments, and robot embodiments. Qwen-VLA is trained with a large-scale joint pretraining recipe over diverse data sources, including…",
          "link": "https://arxiv.org/abs/2605.30280v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30280v1",
          "published": "2026-05-28T17:36:31Z",
          "updated": "2026-05-28T17:36:31Z",
          "authors": [
            "Qiuyue Wang",
            "Mingsheng Li",
            "Jian Guan",
            "Jinhui Ye",
            "Sicheng Xie",
            "Yitao Liu",
            "Junhao Chen",
            "Zhixuan Liang"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 97
        },
        {
          "id": "2605.25829v1",
          "title": "OASIS: Observation-Action Space Alignment via SE(3) Trajectory Prediction for Robotic Manipulation",
          "summary": "Recent vision-language-action (VLA) models and world action models (WAMs) advance robotic manipulation by enriching intermediate representations with auxiliary spatial features or future visual-state prediction. Across simulation and real-world experiments, OASIS outperforms VLA and WAM baselines in success rate and out-of-distribution g…",
          "link": "https://arxiv.org/abs/2605.25829v1",
          "pdfLink": "https://arxiv.org/pdf/2605.25829v1",
          "published": "2026-05-25T13:28:33Z",
          "updated": "2026-05-25T13:28:33Z",
          "authors": [
            "Xinzhe Chen",
            "Sihua Ren",
            "Liqi Huang",
            "Haowen Sun",
            "Mingyang Li",
            "Xingyu Chen",
            "Zeyang Liu",
            "Xuguang Lan"
          ],
          "categories": [
            "cs.RO",
            "cs.AI"
          ],
          "score": 80
        },
        {
          "id": "2605.29438v1",
          "title": "ElegantVLA: Learning When to Think for Efficient Vision-Language-Action Models",
          "summary": "Vision-Language-Action (VLA) models are a powerful paradigm for generalist robotic control. However, their high computational cost and limited control frequency hinder real-time robotic manipulation, especially when large vision-language backbones and iterative action heads run at every control step.",
          "link": "https://arxiv.org/abs/2605.29438v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29438v1",
          "published": "2026-05-28T06:33:05Z",
          "updated": "2026-05-28T06:33:05Z",
          "authors": [
            "Ye Li",
            "Huanan Liu",
            "Kangye Ji",
            "Yuan Meng",
            "Jiajun Fan",
            "Yuansong Wang",
            "Shiyu Qin",
            "Chenglei Wu"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 75
        },
        {
          "id": "2605.29562v1",
          "title": "VLA-Pro: Cross-Task Procedural Memory Transfer for Vision-Language-Action Models",
          "summary": "Vision-Language-Action~(VLA) models have shown strong potential for general-purpose robotic manipulation, yet they still struggle to generalize to unseen tasks that necessitate transferring relevant experience across objects, scenes, and action patterns. Experiments on RoboTwin, RLBench, and real-world manipulation tasks show that VLA-Pr…",
          "link": "https://arxiv.org/abs/2605.29562v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29562v1",
          "published": "2026-05-28T08:14:08Z",
          "updated": "2026-05-28T08:14:08Z",
          "authors": [
            "Shengyu Si",
            "Yuanzhuo Lu",
            "Ruimeng Yang",
            "Ziyi Ye",
            "Zuxuan Wu",
            "Yu-Gang Jiang"
          ],
          "categories": [
            "cs.AI",
            "cs.CV",
            "cs.RO"
          ],
          "score": 74
        },
        {
          "id": "2605.29114v1",
          "title": "ReasonBreak: Probing Vulnerabilities in Reasoning-Enabled Vision-Language-Action Models for Autonomous Driving",
          "summary": "Vision-Language-Action (VLA) models with integrated reasoning have been proposed for end-to-end autonomous driving, assuming a tight coupling between reasoning and trajectory generation. Our results highlight the need for rigorous evaluation and improved defenses to ensure the safety of reasoning-enabled VLA systems in autonomous driving.",
          "link": "https://arxiv.org/abs/2605.29114v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29114v1",
          "published": "2026-05-27T21:21:37Z",
          "updated": "2026-05-27T21:21:37Z",
          "authors": [
            "Mohammadreza Teymoorianfard",
            "Jean-Philippe Monteuuis",
            "Jonathan Petit",
            "Amir Houmansadr"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 72
        },
        {
          "id": "2605.29416v1",
          "title": "3DVLA: Enhancing Vision-Language-Action Models via 3D Spatial and Instance Understanding",
          "summary": "Vision-Language-Action models have achieved remarkable progress in robotic manipulation, yet they suffer from a critical limitation: a lack of 3D scene understanding. We integrate 3DVLA with multiple VLA baselines and evaluate on LIBERO-Plus and RoboTwin 2.0.",
          "link": "https://arxiv.org/abs/2605.29416v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29416v1",
          "published": "2026-05-28T06:07:57Z",
          "updated": "2026-05-28T06:07:57Z",
          "authors": [
            "Zhongyu Xia",
            "Yousen Tang",
            "Bingqing Wei",
            "Yongtao Wang"
          ],
          "categories": [
            "cs.CV",
            "cs.RO"
          ],
          "score": 71
        },
        {
          "id": "2605.28548v1",
          "title": "GEM: Generative Supervision Helps Embodied Intelligence",
          "summary": "Embodied Vision-Language Models (VLMs) have demonstrated impressive performance and generalization in robotics, particularly within Vision-Language-Action frameworks. Furthermore, our deployed action model, GEM-VLA, exhibits vastly superior task execution abilities in both simulation environments and real-world evaluations.",
          "link": "https://arxiv.org/abs/2605.28548v1",
          "pdfLink": "https://arxiv.org/pdf/2605.28548v1",
          "published": "2026-05-27T14:39:42Z",
          "updated": "2026-05-27T14:39:42Z",
          "authors": [
            "Ruowen Zhao",
            "Bangguo Li",
            "Zuyan Liu",
            "Yinan Liang",
            "Junliang Ye",
            "Fangfu Liu",
            "Diankun Wu",
            "Zhengyi Wang"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 70
        },
        {
          "id": "2605.30282v1",
          "title": "Gaze2Act: Gaze-Conditioned Vision-Language-Action Policies for Interactive Robot Manipulation",
          "summary": "Vision-Language-Action (VLA) models have recently shown strong potential for robot learning by following language instructions. To address this limitation, we propose Gaze2Act, a novel VLA framework that leverages human gaze as a dynamic and intuitive intent signal for complex interactive manipulation.",
          "link": "https://arxiv.org/abs/2605.30282v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30282v1",
          "published": "2026-05-28T17:37:16Z",
          "updated": "2026-05-28T17:37:16Z",
          "authors": [
            "Kuangji Zuo",
            "Gen Li",
            "Bofan Lyu",
            "Yanshuo Lu",
            "Boyu Ma",
            "Shijia Han",
            "Xinyu Zhou",
            "Xichen Yuan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 63
        },
        {
          "id": "2605.30226v1",
          "title": "BORA: Bridging Offline Reinforcement Learning and Online Residual Adaptation for Real-World Dexterous VLA Models",
          "summary": "Vision-Language-Action (VLA) models have emerged as a promising paradigm for grounding visual-language understanding into real-world robotic manipulation. However, dexterous manipulation remains challenging for VLA policies due to high-dimensional hand control and compounding execution errors, which makes real-world RL post-training esse…",
          "link": "https://arxiv.org/abs/2605.30226v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30226v1",
          "published": "2026-05-28T16:57:47Z",
          "updated": "2026-05-28T16:57:47Z",
          "authors": [
            "Zhongxi Chen",
            "Yifan Han",
            "Yanming Shao",
            "Huanming Liu",
            "Congsheng Xu",
            "Xiaoyu Chen",
            "Yao Mu",
            "Wenzhao Lian"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 63
        },
        {
          "id": "2605.29662v1",
          "title": "SAFE-Pruner: Semantic Attention-Guided Future-Aware Token Pruning for Efficient Vision-Language-Action Manipulation",
          "summary": "Real-time inference of vision-language-action (VLA) models is essential for robotic control. Specifically, we identify semantic attention consistency, the tendency that VLA models concentrate their attention probability mass on the same semantic entity across execution steps.",
          "link": "https://arxiv.org/abs/2605.29662v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29662v1",
          "published": "2026-05-28T09:23:08Z",
          "updated": "2026-05-28T09:23:08Z",
          "authors": [
            "Shilin Ma",
            "Chubin Zhang",
            "Changyuan Wang",
            "Yuji Wang",
            "Yue Wu",
            "Zixuan Wang",
            "Jingqi Tian",
            "Zheng Zhu"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 61
        },
        {
          "id": "2605.30350v1",
          "title": "DynaFLIP: Rethinking Robotics Perception via Tri-Modal-Dynamics Guided Representation",
          "summary": "Robot manipulation critically depends on perception that preserves the action-relevant aspects of a scene. Yet most robot learning pipelines are built upon visual encoders pre-trained for static recognition or vision-language alignment, leaving motion understanding to downstream policies.",
          "link": "https://arxiv.org/abs/2605.30350v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30350v1",
          "published": "2026-05-28T17:59:53Z",
          "updated": "2026-05-28T17:59:53Z",
          "authors": [
            "Jusuk Lee",
            "Seungjae Lee",
            "Jonghun Shin",
            "Hoseong Jung",
            "Sungha Kim",
            "Daesol Cho",
            "H. Jin Kim",
            "Jia-Bin Huang"
          ],
          "categories": [
            "cs.LG",
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.29605v1",
          "title": "VLAConf: Calibrated Task-Success Confidence for Vision-Language-Action Models",
          "summary": "Confidence estimation for Vision-Language-Action (VLA) models is essential for robots to perform manipulation tasks in the open world, providing crucial signals for risk-sensitive decision-making and failure anticipation. The effectiveness of VLAConf is further validated in real-robot experiments.",
          "link": "https://arxiv.org/abs/2605.29605v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29605v1",
          "published": "2026-05-28T08:42:12Z",
          "updated": "2026-05-28T08:42:12Z",
          "authors": [
            "Dehao Huang",
            "Aoxiang Gu",
            "Chengjie Zhang",
            "Bolin Zou",
            "Wenlong Dong",
            "Zilang Cen",
            "Yue Wang",
            "Hong Zhang"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.28634v1",
          "title": "PrimitiveVLA: Learning Reusable Motion Primitives for Efficient and Generalizable Robotic Manipulation",
          "summary": "Vision-Language-Action (VLA) models offer a promising paradigm for generalist robotic policies, yet their adaptation is hindered by data inefficiency and poor generalization. We propose PrimitiveVLA, a framework that shifts this paradigm toward a Primitive-Centric Disassemble & Assemble paradigm.",
          "link": "https://arxiv.org/abs/2605.28634v1",
          "pdfLink": "https://arxiv.org/pdf/2605.28634v1",
          "published": "2026-05-27T15:41:18Z",
          "updated": "2026-05-27T15:41:18Z",
          "authors": [
            "Yutai Li",
            "Shaohui Peng",
            "Jiaming Guo",
            "Di Huang",
            "Zihao Zhang",
            "Yuxuan Guo",
            "Yunkai Gao",
            "Siming Lan"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 59
        },
        {
          "id": "2605.30326v1",
          "title": "RoboWits: Unexpected Challenges for Robotic Creative Problem Solving",
          "summary": "However, current robotic benchmarks primarily emphasize skill-level execution and provide limited insight into such cognitive reasoning capabilities. We introduce RoboWits, a bi-manual robotic benchmark designed to systematically evaluate cognitive reasoning, creative tool use, and robustness to unexpected conditions.",
          "link": "https://arxiv.org/abs/2605.30326v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30326v1",
          "published": "2026-05-28T17:57:15Z",
          "updated": "2026-05-28T17:57:15Z",
          "authors": [
            "Chunru Lin",
            "Hongxin Zhang",
            "Fenghao Yu",
            "Zhehuan Chen",
            "Thomas L. Griffiths",
            "Yejin Choi",
            "David Held",
            "Chuang Gan"
          ],
          "categories": [
            "cs.AI",
            "cs.RO"
          ],
          "score": 58
        },
        {
          "id": "2605.29577v1",
          "title": "Mitigating State Aliasing in Vision-Language-Action Models via Inverse Dynamics Learning",
          "summary": "Vision-Language-Action (VLA) models have emerged as a promising framework that unifies perception, reasoning, and control for robot manipulation by adapting pretrained vision-language models (VLMs) to action prediction. We further use pseudo-reversed supervision to expose the encoder to a broader range of action directions and improve ge…",
          "link": "https://arxiv.org/abs/2605.29577v1",
          "pdfLink": "https://arxiv.org/pdf/2605.29577v1",
          "published": "2026-05-28T08:22:49Z",
          "updated": "2026-05-28T08:22:49Z",
          "authors": [
            "Kyujin Lee",
            "Injae Kim",
            "Jihwan Park",
            "Yejun Ju",
            "Minseok Joo",
            "Hyunwoo J. Kim"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 57
        },
        {
          "id": "2605.30011v1",
          "title": "VisualThink-VLA: Visual Intermediate Reasoning for Effective and Low-Latency Vision-Language-Action Policies",
          "summary": "Recent work has begun to equip vision-language-action (VLA) policies with explicit intermediate reasoning. Across multiple benchmarks and real-robot evaluation, VISUALTHINK-VLA achieves the highest success rate on most benchmarks while reducing the multi-second latency of reasoning-augmented baselines to the sub-second regime.",
          "link": "https://arxiv.org/abs/2605.30011v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30011v1",
          "published": "2026-05-28T14:36:53Z",
          "updated": "2026-05-28T14:36:53Z",
          "authors": [
            "Mingjian Gao",
            "Wenqiao Zhang",
            "Yuqian Yuan",
            "Yang Dai",
            "Binhe Yu",
            "Zheqi Lv",
            "Haoyu Zheng",
            "Jiaqi Zhu"
          ],
          "categories": [
            "cs.AI",
            "cs.CV"
          ],
          "score": 55
        },
        {
          "id": "2605.28803v1",
          "title": "Ω-QVLA: Robust Quantization for Vision-Language-Action Models via Composite Rotation and Per-step Scaling",
          "summary": "Vision-Language-Action (VLA) models unify perception, reasoning, and control within a single policy, yet their multi-billion-parameter backbones and diffusion-based action heads make on-device deployment prohibitively expensive. On LIBERO, Omega-QVLA compresses Pi 0.5 and GR00T N1.5 to W4A4 with 98.0% and 87.8% task success rates, matchi…",
          "link": "https://arxiv.org/abs/2605.28803v1",
          "pdfLink": "https://arxiv.org/pdf/2605.28803v1",
          "published": "2026-05-27T17:55:01Z",
          "updated": "2026-05-27T17:55:01Z",
          "authors": [
            "Xinyu Wang",
            "Mingze Li",
            "Sicheng Lyu",
            "Dongxiu Liu",
            "Kaicheng Yang",
            "Ziyu Zhao",
            "Yufei Cui",
            "Xiao-Wen Chang"
          ],
          "categories": [
            "cs.CV",
            "cs.LG"
          ],
          "score": 54
        },
        {
          "id": "2605.30328v1",
          "title": "Supercharging Thermal Gaussian Splatting with Depth Estimation",
          "summary": "Efficient and robust 3D scene representation is crucial in autonomous driving, robotics, and related fields. While RGB images provide valuable content for 3D reconstruction, other modalities like thermal or depth can enable additional information on the environment.",
          "link": "https://arxiv.org/abs/2605.30328v1",
          "pdfLink": "https://arxiv.org/pdf/2605.30328v1",
          "published": "2026-05-28T17:57:35Z",
          "updated": "2026-05-28T17:57:35Z",
          "authors": [
            "Manoj Biswanath",
            "Chenxin Cai",
            "Hannah Schieber",
            "Daniel Roth",
            "Benjamin Busam"
          ],
          "categories": [
            "cs.CV"
          ],
          "score": 52
        },
        {
          "id": "2605.26577v1",
          "title": "Bridging Control with Neural Network Verifier alpha-beta-CROWN: A Tutorial",
          "summary": "Learning-based methods for synthesizing controllers have gained popularity due to their high expressiveness and strong empirical performance. However, in safety-critical scenarios such as autonomous driving, robotics, and power systems, empirical performance alone is insufficient, and formal verification of controller properties such as…",
          "link": "https://arxiv.org/abs/2605.26577v1",
          "pdfLink": "https://arxiv.org/pdf/2605.26577v1",
          "published": "2026-05-26T05:49:19Z",
          "updated": "2026-05-26T05:49:19Z",
          "authors": [
            "Haoyu Li",
            "Xiangru Zhong",
            "Hao Cheng",
            "Bin Hu",
            "Huan Zhang"
          ],
          "categories": [
            "cs.AI",
            "cs.LG"
          ],
          "score": 51
        },
        {
          "id": "2605.27947v1",
          "title": "SANTS: A State-Adaptive Scheduler for World Action Models",
          "summary": "World Action Models (WAMs) improve robot manipulation by using video-based future representations to condition action generation. Experiments show that SANTS reaches \\(94.4\\%\\) overall success on RoboTwin 2.0 and \\(73.1\\%\\) average success across seven real-robot tasks, while reducing latency by \\(81.7\\%\\) and \\(79.0\\%\\) relative to full…",
          "link": "https://arxiv.org/abs/2605.27947v1",
          "pdfLink": "https://arxiv.org/pdf/2605.27947v1",
          "published": "2026-05-27T04:40:48Z",
          "updated": "2026-05-27T04:40:48Z",
          "authors": [
            "Yirui Sun",
            "Guangyu Zhuge",
            "Keliang Liu",
            "Jie Gu",
            "Xinyu Bing",
            "Zhongxue Gan",
            "Chunxu Tian"
          ],
          "categories": [
            "cs.RO"
          ],
          "score": 50
        }
      ]
    }
  ]
};
